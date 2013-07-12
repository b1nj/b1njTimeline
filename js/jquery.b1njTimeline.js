/*! jQuery B1njTimeline - v1.0
* https://github.com/b1nj/B1njTimeline
* Copyright (c) 2012 b1nj Licensed MIT */

;(function ( $, window, undefined ) {

    var pluginName = 'b1njTimeline',
        document = window.document,
        defaults = {
            height: 400,
            margeTop: 40
        };

    // Pugin constructor
    function Plugin( element, options ) {
        this.element = element;
        this.$element = null;
        this.options = $.extend( {}, defaults, options) ;
        this._dateDebut = false;
        this._dateFin = false;
        this._duree = false;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this;

        $(this.element).addClass('events').wrap('<div class="b1njTimeline" />');

        this.$element = $(this.element).parent();
        this.$element.css('height', this.options.height);

        // Recherche date la plus ancienne et la plus récente
        this._dateDebut = new moment(this.$element.find('li:first time').attr('datetime'), 'YYYY-MM-DD');
        this._dateFin = new moment(this.$element.find('li:last time').attr('datetime'), 'YYYY-MM-DD');
        this._duree = this._dateFin.diff(this._dateDebut);

        // Placement de l'évenement
        this.$element.find('li').each(function () {
            $li = $(this);
            $li.wrapInner('<div class="event" />');
            var date = new moment($li.find('time').attr('datetime'), 'YYYY-MM-DD')
            $li.css('top', self._getTop(date));

            $li.on('click', function (e) {
                self.open(this);
            });
        });

        // Mise en place des dates graduées
        var date = this._dateDebut.year();
        var num_years = this._dateFin.diff(this._dateDebut, 'years');

        var tranche = 1;
        if (num_years > 500) {
            tranche = 100;
        } else if (num_years > 250) {
            tranche = 50;
        } else if (num_years > 100) {
            tranche = 25;
        } else if (num_years > 50) {
            tranche = 10;
        } else if (num_years > 25) {
            tranche = 5;
        } else if (num_years > 10) {
            tranche = 2;
        }
        date = date + 1;
        while (date % tranche != 0) {
            date = date + 1;
        }

        var html_dates = '<ol class="timeline_dates">';
        for (var i = date; i <= this._dateFin.year(); i = i + tranche) {
            var top = self._getTop(new moment(i.toString(), 'YYYY'));
            html_dates += '<li style="top: ' + top + 'px"><div>' + i + '</div></li>';
        }
        html_dates += '<ol>';

        this.$element.find('ol').after(html_dates);

    };

    Plugin.prototype._getTop = function (date) {
        var top = date.diff(this._dateDebut) * this.options.height / this._duree;
        top = Math.abs(parseInt(top));
        top = top + this.options.margeTop;
        return top;
    };

    Plugin.prototype.open = function (desc) {
        var $evenement2 = $(desc).find('.event');
        if ($evenement2.hasClass('open')) {
            $evenement2.removeClass('open');
        } else {
            this.$element.find('.event').removeClass('open');
            $evenement2.addClass('open');
        }

    };

    // Adding Plugin to the jQuery.fn object
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };
}(jQuery, window));