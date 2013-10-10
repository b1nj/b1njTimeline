B1nj Timeline
========================

**[Demo]**

B1nj Timeline is a very simple jQuery plugin. The event is automatically placed on the timeline.

![Timeline](http://www.b1nj.fr/blog/public/b1nj-timeline.jpg)

## Getting Started

Include Css, html and script jQuery, moment, plugin on a page. This is all.

**CSS**

```html
<link rel="stylesheet" media="screen" href="css/b1njTimeline.css">
```

**HTML**

```html
<ol id="timeline">
    <li>
        <time datetime="1991-10-01">July 1995</time>
        <p>Naissance</p>
        <div class="description">
            <p>Description...</p>
        </div>
    </li>
    <li>
        <time datetime="1994-10">Septembre 1999</time>
        <p>Rentrée des classes !</p>
    </li>
</ol>
```
Format date is YYYY-MM-DD. Date before Jesus Christ d'ont work.

**jQuery**

```html
<script src="jquery.js"></script>
<script src="moment.min.js"></script>
<script src="jquery.b1njTimeline.js"></script>
<script>
    $(function() {
        $('#timeline').b1njTimeline({
            'height' : 600
        });
    });
</script>
```
You must adjust manually the height of timeline width the param height.

Design by and css inspired [@csswizardry HTML/CSS timeline]

[Demo]: http://www.b1nj.fr/tests/b1njTimeline/
[@csswizardry HTML/CSS timeline]: http://csswizardry.com/2011/03/coding-up-a-semantic-lean-timeline/

