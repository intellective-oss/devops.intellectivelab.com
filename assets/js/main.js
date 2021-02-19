$(function () {

    SimpleJekyllSearch({
        searchInput: document.getElementById("search-input"),
        resultsContainer: document.getElementById("results-container"),
        json: "/search.json",
        searchResultTemplate: '<li><a href="{url}" title="Search configuration">{title}</a></li>',
        noResultsText: 'No results found.',
        fuzzy: true,
    });


    $("#side-nav, #side-nav2").navgoco({
        caretHtml: '',
        accordion: true,
        openClass: 'open',
        save: true,
        cookie: {
            name: 'navgoco',
            expires: false,
            path: '/'
        },
        slide: {
            duration: 400,
            easing: 'swing'
        },
        // Add Active class to clicked menu item
        // onClickAfter: active_menu_cb,
    });

    $("#collapseAll").click(function (e) {
        e.preventDefault();
        $("#side-nav, #side-nav2").navgoco('toggle', false);
    });

    $("#expandAll").click(function (e) {
        e.preventDefault();
        $("#side-nav, #side-nav2").navgoco('toggle', true);
    });

    // TOC NAVIGATIONS

    var tocs = $('#toc');
    tocs.toc({ minimumHeaders: 0, listType: 'ul', showSpeed: 0, headers: 'h1,h2,h3,h4' });

    /* this offset helps account for the space taken up by the floating toolbar. */
    tocs.on('click', 'a', function () {
        var target = $(this.getAttribute('href'))
            , scroll_target = target.offset().top

        $(window).scrollTop(scroll_target - 130);
        return false
    })

});

