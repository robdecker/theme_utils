Welcome to Theme Utils module.

Summary
-------
A set of utilities to make theming a bit easier. Current features:
* Block title to class - Adds the block's title to the block's set of HTML
  classes. Useful when theming to quickly identify and target individual blocks.
* Regions to body class - Adds the page's active regions to the body element's
  list of HTML classes.
* Display @media query - Displays the active @media query in the browser window.
* Display viewport dimensions - Displays the viewport's dimensions in the
  browser window.


Requirements
------------
Chaos Tools (ctools)


Installation
------------
1. Install and activate Theme Utils like every other Drupal module.
2. Download version 3.0.0 of PHP-CSS-Parser from the GitHub repo.
   https://github.com/sabberworm/PHP-CSS-Parser (Go to the Tags tab to get the
   link to the 3.0.0 zip file).
3. Create a directory called 'php-css-parser' inside of this module directory.
4. Extract all files from the zip archive into this new directory.
5. Verify that 'Parser.php' is in the following directory:
   [this_module_directory]/php-css-parser/lib/Sabberworm/CSS/ so, for most
   installations, this will be
   sites/all/modules/theme_utils/php-css-parser/lib/Sabberworm/CSS
6. Configure enabled utilities at admin/config/user-interface/theme_utils


Author
------
Rob Decker (rrrob) - http://drupal.org/user/273533
