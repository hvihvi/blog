---
title: Browser Networking Performances
date: 2021/7/23
description: Notes from the High Performance Browser Networking book
tag: web development, web performances, user experience, book
author: You
---

# Browser Networking Performances

Book is free : https://hpbn.co/.

## Lag perception

- 0-100ms: instant
- &gt; 100-200ms: Perceptible lag
- &gt; 300ms: sluggish
- &gt; 1s: many users perform a mental context switch
- &gt; 10s: abandon

## TCP Slow Start

1. starts with a **3 way handshake**
2. sends a small packet (**14kB**)
3. **doubles the size** as long as the connexion doesn't drop packets to reach optimal speed

When the connexion is already open, it will send packet of greater size.

Re-use TCP connexions and minimise new TCP handshakes (+ slow start) improves web performances.

Make the initial request small (&lt;14kb if possible, use compression) with inlined critical CSS and no render blocking resources to render fast.

## TLS

TLS adds another layer of handshake exchanges, after the TCP handshake. Reuse connexions to avoid this cost.

Observe TCP and TLS startups in Network or Performance devtools tabs (hover).

## DOM CSSOM and JS

- HTML and CSS are render blocking
- Requesting a style file blocks render
- JS scripts are render blocking (it can alter the DOM), unless set to **async/defer**

## Browser hints

We can tell the browser to open a connexion early, or even start pre-rendering a page with `<link rel />`:

```html
<link rel="dns-prefetch" href="//hostname_to_resolve.com" />
<link rel="preload" href="/javascript/myapp.js" />
<link rel="prefetch" href="/images/big.jpeg" />
<link rel="prerender" href="//example.org/next_page.html" />
```

`prerender` is in experimental stage, not widely supported.

## Cache

Use `Cache-Control` header (max-age). `Last-Modified` and `ETag` provide validation mechanism.

Reseaches (2012) have found that about 19% of HTTP traffic is redundant transfert.

## CORS

For simple requests, no cookies or http authentication:

```text
=> Request
GET /resource.js HTTP/1.1
Host: thirdparty.com
Origin: http://example.com (1)
...

<= Response
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://example.com (2)
...
```

1 - Origin header is automatically set by the browser.  
2 - Opt-in header is set by the server.

For more cross-origin authorisations, the browser must send a preflight request:

```text
=> Preflight request
OPTIONS /resource.js HTTP/1.1 (1)
Host: thirdparty.com
Origin: http://example.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: My-Custom-Header
...

<= Preflight response
HTTP/1.1 200 OK (2)
Access-Control-Allow-Origin: http://example.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: My-Custom-Header
...

(actual HTTP request) (3)
```

1. Preflight OPTIONS request to verify permissions
2. Successful preflight response from third-party origin
3. Actual cross-origin request
