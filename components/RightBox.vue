<template>
    <b-card>
        <b-row>
            <b-col>
                <dl>
                    <dt class="maintext">
                        {{maintext}}
                    </dt>
                    <dt class="contact">
                        {{contact}}
                    </dt>
                </dl>
            </b-col>
            <b-col md="auto">
                <img 
                    src="~/assets/down-arrow.png"
                    width="8px"
                >
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div class="iconcontainer">
                    <b-icon :style="'width: 10.96px'" :icon="value.icon"></b-icon>
                </div>
            </b-col>
        </b-row>
    </b-card>
</template>

<style scoped>
    .card > .card-body {
        padding: 0.6rem;
    },
    .maintext {
        font-size: 12px;
        font-weight: bold;
    }
    .contact {
        font-size: 10px;
        color: #737373;
    }
    .iconcontainer {
        height: 24px;
        width: 24px;
        border-radius: 10rem;
        background-color: #FFF6E9;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 5px;
    }
</style>

<script lang="ts">
export default {
    props: {
        maintext: String,
        contact: String,
        duration: String
    },
    data() {
        return
    }
}
</script>