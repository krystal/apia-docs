---
title: Generating docs
description: "An opinionated framework for building APIs in Ruby."
position: 1.2
category: "Welcome"
---

Apia provides a utility that allows you to generate documentation for any API schema. The documentation is provided as a series of HTML files containing all aspects of the API. Here's an example screenshot:

![Screenshot](/screenshots/dark-docs.png)

The docs generator is provided as a container which you can run using Docker.

1. Place your schema file in `schema.json`.
2. Create a config file called `config.yaml` containing configuration. See example below.
3. Create an empty directory called `output` that your documentation will be generated into.
4. Run the command below.

```
mkdir output
docker run \
    -u `id -u` \
    -v $(pwd)/schema.json:/config/schema.json \
    -v $(pwd)/config.yaml:/config/config.yaml \
    -v path/to/output:/output \
    ghcr.io/apiaframework/docs-generator:latest
```

## Documentation configuration

The docs generator can accept some configuration in the form of a YAML config file. There isn't much you can provide at the moment but this is an example:

```yaml
# Set the address that should be used when the documentation provides
# an email address.
support_address: support@example.com

# If you want to prefix all scopes with something, you can do so here.
scope_prefix: "core:"

# Options to define how the authentication section is generated.
authentication:
  # If you have an external link for docs about authenticating to the API
  # you can provide that here.
  external_link: https://developers.katapult.io/api/authenticating

  # You can provide additional configuration that is only used when
  # providing documentation for the `bearer` type of authenticator.
  bearer:
    # This is the placeholder that is shown where a secret should
    # be provided
    placeholder: api-token

    # This provides details for how the user can obtain their own
    # API token/secret.
    obtaining_api_token: |
      You can generate an API token through the Widgets interface. Once you
      have generated the token, you can use it as described below.
```
