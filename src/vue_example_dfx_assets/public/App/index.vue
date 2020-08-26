<template>
    <div>
        Example Vue App <br />

        canister response : {{ helloResp || "Loading..." }}
    </div>
</template>

<script>
import canister from "ic:canisters/vue_example_dfx";

export default {
    data() {
        return {
            helloResp: null,
        }
    },
    async mounted() {
        this.helloResp = await canister.greet("davidp94");
    }
}
</script>