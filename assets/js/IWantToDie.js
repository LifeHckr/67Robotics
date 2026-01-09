(function($) { //https://stackoverflow.com/questions/16543038/same-sidebar-across-webpages
    var navbar_code_str =
    `<div id="sidebar" class="inactive">
        <div class="inner">
    
            <!-- Menu -->
            <nav id="menu">
                <header class="major">
                    <h2>Menu</h2>
                </header>
                <ul>
                    <li><a href="index.html">Homepage</a></li>
                    <li><a href="https://snap4arduino.rocks/" target="_blank">Snap4Arduino</a></li>
                    <li>
                        <span class="opener">Robotics Lessons</span>
                        <ul>
                            <li><a href="day1.html">Spring Day 1: Intro to Circuits</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
    
            <!-- Footer -->
            <footer id="footer">
                <p class="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
            </footer>
    
        </div>
    </div>`
    $('#wrapper').append(navbar_code_str);
})(jQuery);