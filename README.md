# Digital Dojo
[Website for our team](https://dts-stn.github.io/digital-dojo/home/), working in Digital Technology Solutions within IITB at ESDC.

# Local development
1. Install [Ruby v2.6.8](https://www.ruby-lang.org/en/downloads/) 
2. Install bundler, dependencies and start the project:

```bash
# Install bundler
gem install bundler

# Install dependencies
cd /path/to/project
bundle install

# Start the project (http://localhost:4000)
jekyll serve --livereload
```

Troubleshooting:
- If you get the following error:

```bash
Unable to load the EventMachine C extension; To use the pure-ruby reactor, require 'em/pure_ruby'
C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/eventmachine-1.2.7-x64-mingw32/lib/rubyeventmachine.rb:2:in `require': cannot load such file -- 2.6/rubyeventmachine (LoadError)
```

Execute the following two commands, and try the livereload again.

```bash
gem uninstall eventmachine
gem install eventmachine --platform ruby
```
3. Navigate to http://127.0.0.1:4000/digital-dojo/


# Add a new page
1. Create an English and French version of the page in the respective [`./_pages/en`](https://github.com/DTS-STN/digital-dojo/tree/main/_pages/en/) and [`./_pages/fr`](https://github.com/DTS-STN/digital-dojo/tree/main/_pages/fr) directory.
1. Use [Jekyll front matter](https://jekyllrb.com/docs/front-matter/) to link the pages together:
```yaml
# English page
---
layout: page
title: Contact us
lang: en
ref: contact # must be same for linked English/French page
permalink: /contact-us/
---

# French page
---
layout: page
title: Contactez-nous
lang: fr
ref: contact
permalink: /contactez-nous/
---
```

# Add translated strings
1. Edit [`./_data/i18n.yml`](https://github.com/DTS-STN/digital-dojo/blob/main/_data/i18n.yml) to add new English/French strings.  
1. Use them in the templates like so:
```yaml
{{ site.data.i18n.en.key_name }}          # English, hard-coded
{{ site.data.i18n.fr.key_name }}          # Français, hard-coded
{{ site.data.i18n[page.lang].key_name }}  # Dynamic, based on page's language
```

# Publish changes
Any changes merged into master are automatically published.

# Credit
Theme is based on the [type-theme](https://github.com/rohanchandra/type-theme) template.
