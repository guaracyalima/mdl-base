<!DOCTYPE html>
<html lang="en">
<head>
    <title>Eleja-se</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="your,keywords">
    <meta name="description" content="Short explanation about this website">
    <link rel="stylesheet" href="{{ asset ('assets/css/app.min.css') }}">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">

</head>
<body class="menubar-hoverable header-fixed menubar-pin ">
@include('template.header')
<div id="base">
    <div id="content">
        @include('template.ofcanvas_left')
        <section>
            <div class="section-body">
                @yield('content')
            </div>
        </section>
    </div>
    @include('template.menu_top')
    @include('template.sidebar')
</div>
<script src="{{ asset('assets/js/app.js') }}"></script>
</body>
</html>
