---
title: Testing Endpoints
description: "An opinionated framework for building APIs in Ruby."
position: 3.0
category: "Testing"
---

You can, of course, just test your full stack by using your existing web testing framework. If you want to test endpoints directly, Apia provides a few useful tools that you can use to faciliate this.

```ruby
response = CoreAPI::Base.test_endpoint(described_class, :create) do |req|
  req.json_body[:user] = { user: 'blah' }
end

response.status     # => 201
response.body       # => { ... }
response.headers    # => { ... }
```
