(function ($, undefined) {
    $.MySelectObject = function (options, element) {

        this.$el = $(element);

        this._init(options);

};

$.MySelectObject.defaults = {
    msg: [],
    shownum: 5,
    callback: function (ele) {
    }
};

    $.MySelectObject.prototype = {
        _init: function (options) {
            var obj = $.extend(true, {}, $.MySelectObject.defaults, options);

            var $ele = this.$el;
            var msg = obj.msg;
            

            $ele.append('<p></p>');
            $ele.append('<ul></ul>');
            var $p = $ele.find('p');
            var $ul = $ele.find('ul');
            $ul.hide();
            var lihtml = '';
            $.each(msg, function (index) {
                lihtml += "<li>" + msg[index] + "</li>";
            })
            $ul.append(lihtml);
            if (obj.shownum >= 0 && obj.shownum <= msg.length) {
                $p.html(msg[obj.shownum]);
                $ul.find('li').eq(obj.shownum).addClass('active')
            }
            else {
                $p.html(msg[0])
                $ul.find('li').first().addClass('active')
            }
            $('body').click(function (e) {
                var bol = $(e.target).parents(obj.ele).length;
                if (bol) {
                    if (e.target.nodeName == 'P' || e.target.nodeName == 'IMG') {
                        $ul.is(':hidden') ? $ul.show() : $ul.hide();
                    }
                    if (e.target.nodeName == 'LI') {
                        $p.html(function () {
                            $(e.target).addClass('active').siblings().removeClass('active');
                            $ul.hide();
                            return $(e.target).html();
                        })
                        obj.callback ? obj.callback($(e.target)) : '';
                    }
                }
                else {
                    $ul.hide();
                }
            });

        }

    }
$.fn.mySelect = function (options) {

    this.each(function () {

        var instance = $.data(this, 'mySelect');
        if (!instance) {
            $.data(this, 'mySelect', new $.MySelectObject(options, this));
        }
    });
    return this;
};

})(jQuery);