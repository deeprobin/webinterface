<script lang="ts">
    import {theme} from '../storage';

    function switchTheme() {
        if($theme == 'light') {
            theme.set('dark');
        } else {
            theme.set('light');
        }
        location.reload();
    }
</script>

<style type="text/scss">
    h1 {
        color: #f19066;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    .property {
        .key {
            margin-right: 6px;
            font-weight: 700;
            text-align: left;
        }
        .value {
            margin-left: 6px;
            text-align: right;
        }
    }
</style>

<h1>Profile</h1>
<div class="property">
    <span class="key">User ID</span>
    <span class="value">0</span>
</div>
<div class="property">
    <span class="key">Username</span>
    <span class="value">Dummy</span>
</div>
<div class="property">
    <span class="key">Password</span>
    <span class="value">*******</span>
</div>
<div class="property">
    <span class="key">Theme</span>
    <span class="value">{$theme}</span>
    <!-- This button is only for testing purposes: -->
    <button on:click="{() => switchTheme()}">Switch Theme</button>
</div>