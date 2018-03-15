# neat-bootstrap-grid

neat-bootstrap-grid is a lightweight Sass plugin to generate [Bootstrap](https://github.com/twbs/bootstrap)-style column classes using the Neat CSS grid.

# Requirements
[Sass](https://github.com/sass/sass) 3.4+ or [LibSass](https://github.com/sass/libsass) 3.3+

[Neat](https://github.com/thoughtbot/neat) 2.1.0+

# Installation

Install neat-bootstrap-grid using Bower.

  ```bash
  bower install neat-bootstrap-grid --save-dev
  ```

# Usage

Include any of the Bootstrap grid classes in your markup. 

  ```html
  <html>
    <body>
      <div class="container">
        <div class="row">
          <a class="title col-xs-12 col-md-6 col-xl-5">Title</a>
          <nav class="main-nav col-xs-12 col-md-6 col-xl-7">
           <a href="#">Services</a>
            <a href="#">Case studies</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </div>
    </body>
  </html>
  ```
To use native CSS grids, ensure ``` $include-css-grids ``` is set to ```true```. By default, neat-bootstrap-grid uses CSS grid classes and applies native grid classes to HTML with the ```.cssgrid``` class and Neat grid classes to HTML with the ```.no-cssgrid``` class. Use [Modernizr's](https://modernizr.com/) grid detection to manage these classes automatically.