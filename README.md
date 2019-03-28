# Pagination
## Dependencies
1.  JS
    1. jQuery
    2. page.js
2. CSS
    1. Animate.css

## Markup

```HTML
     <!-- Parent class needed to for the animation -->
    <div class="page">
        <!-- Container of animated elements -->
        <div class="page-items">
            <!-- Class for an element to animate -->
            <div class="page-item">
                <div class="card">
                    <div class="card-content">
                        <p>This is my awesome page-1 element that will animate on page-enter and page-exit</p>
                    </div>
                </div>
            </div>
            <div class="page-item">
                <div class="card">
                    <div class="card-content">
                        <p>This is my awesome page-1 element that will animate on page-enter and page-exit</p>
                    </div>
                </div>
            </div>
            <!-- End of animated page elements -->
        </div>

        <!-- Container of page navigation -->
        <div class="page-numbers">
            <ul class="page-numbers-list">
                <!-- Generate your pagination here as: foreach $page do <li> #link $page /link </li> -->
                <li class="page-number"> <a href="1.html?direction=left">1</a> </li>
                <li class="page-number"> <a href="#!">2</a> </li>
                <li class="page-number"> <a href="3.html?direction=right">3</a> </li>
                <!-- End of generated navigatioj links -->
            </ul>
        </div>
        <!-- End of page navigation -->
```