B1nj Polaroid Gallery
========================

**[Demo]**

B1nj Polaroid Gallery is a very simple jQuery plugin.

## Getting Started

Include Css, html and script jQuery, moment, plugin on a page. This is all.

**CSS**

```html
<link rel="stylesheet" media="screen" href="css/b1njTimeline.css">
```

**HTML**

```html
<div id="timeline" class="timeline">
    <ol class="evenement">
        <li>
            <time datetime="1991-10-01">July 1995</time>
            <p>Naissance</p>
        </li>
        <li>
            <time datetime="1994-10">Septembre 1999</time>
            <p>Rentrée des classes !</p>
        </li>
    </ol>
</div>
```

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

It's easy to add a nice zoom, with for example the plugin fancyBox.


[Inspire by HTML/CSS timeline @csswizardry]

[Demo]: http://www.b1nj.fr/tests/b1njTimeline/
[Inspire by HTML/CSS timeline @csswizardry]: http://csswizardry.com/2011/03/coding-up-a-semantic-lean-timeline/

