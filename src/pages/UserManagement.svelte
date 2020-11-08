<script lang="ts">

</script>

<style type="text/scss">
    h1 {
        color: #f19066;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    td {
        text-align: left;
        padding-top: 2px;
        padding-bottom: 2px;
        padding-right: 3px;
        padding-left: 3px;
    }

    table {
        border-color: gray;
        border-width: 1px;
        border-radius: 6px;
        border-style: solid;
        padding: 1px;

        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

</style>

<h1>User Management</h1>
<table>
    <thead>
      <tr>
        <th>ID</th>
        <th>User name<br></th>
        <th>Permissions</th>
        <th>Created at<br></th>
        <th>Last login at</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>deeprobin</td>
        <td>Role: Admin<br></td>
        <td>today</td>
        <td>today</td>
      </tr>
      <tr>
        <td>2</td>
        <td>nats</td>
        <td>Role: Admin</td>
        <td>yesterday</td>
        <td>yesterday</td>
      </tr>
      <tr>
        <td>3</td>
        <td>nesewebel</td>
        <td>Role: Member</td>
        <td>today</td>
        <td>today</td>
      </tr>
      <tr>
        <td>4</td>
        <td>crups</td>
        <td>Role: Guest</td>
        <td>today<br></td>
        <td>today</td>
      </tr>
    </tbody>
    </table>