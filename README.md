Meteor Flexslider
=================

Implementado con [flexslider](http://flexslider.woothemes.com/) version 2.5.0

### **Instalar el paquete**
Dentro de nuestra App Meteor ejecutar:
>$ meteor add artjc:flexslider

### **Uso del paquete**
Para agregar el slider, ingrese la siguiente estructura básica dentro de un Template:
```
<template name="Sliders">
  <div id="myslider" class="flexslider">
    <ul class="slides">
      {{#each sliders}}
        <li><img src="{{urlImage}}"></li>
      {{/each}}
    </ul>
  </div>
</template>
```
>client/templates/mytemplate.html

El siguente paso el jquery para iniciar flexslider dentro de onRendered del template:
```
Template.Sliders.onRendered(function () {
  $('#myslider').flexslider();
});
```
>client/templates/mytemplate.js
