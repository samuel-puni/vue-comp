<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server·{{ server.id }} selected, Status: {{ server.status}}</p>
        <hr>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>

<script>
    import { eventBus } from '../../main';

    export default {
        data: function() {
            return {
                server: null
            };
        },
        methods: {
            changeStatus() {
                this.server.status = 'Normal';
            }
        },
        created() {
            eventBus.$on('serverWasSelected', (server) => {
                this.server = server
            });
        }
    }

</script>