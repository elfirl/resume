$(document).ready(function() {
    
    getPageName();
    getCopyYear();

    function getPageName() {
        var pageName = $('body').attr('class');
        $('.page-name').text(pageName);
    }

    function getCopyYear() {
        var date = new Date();
        var copyYear = date.getFullYear();
        $('.copy-date').text(copyYear);
    }



});