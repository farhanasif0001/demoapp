<template>
    <b-card class="item">
        <b-row>
            <b-col md="2">
                <dl>
                    <dt class="maintext">
                        {{maintext}}
                    </dt>
                    <dt class="location">
                        {{location}}
                    </dt>
                </dl>
            </b-col>
            <b-col class="my-auto form-inline p-0" md="1">
                <div v-for="value in values" :key="value.id" class="iconcontainer">
                    <b-icon :style="'width: 10.96px'" :icon="value.icon"></b-icon>
                </div>
            </b-col>
            <b-col class="my-auto p-0" md="2">
                <div v-for="badge in badges" :key="badge.id" class="badge made">
                    <b-icon :style="'width: 10.96px'" :icon="badge.icon"></b-icon>
                    <span>{{badge.text}}</span>
                </div>
            </b-col>
            <b-col class="my-auto" md="2">
                <div :class="contact.verified ? 'badge contact verified mt-2 ml-2' : 'badge contact mt-2 ml-2'">
                    <b-icon :style="'width: 10.96px'"></b-icon>
                    <span>{{contact.text}}</span>
                </div>
            </b-col>
            <b-col class="my-auto" md="auto">
                <div :class="'badge homebadge'">
                    <b-icon :style="'width: 10.96px'" :icon="home.icon"></b-icon>
                    &nbsp;|&nbsp;
                    <span>{{home.text}}</span>
                </div>
            </b-col>
            <b-col class="costcontainer p-0 my-auto" md="2">
                <dl>
                    <dt class="maintext">
                        {{cost}}
                    </dt>
                    <dt class="location">
                        {{costdate}}
                    </dt>
                </dl>
            </b-col>
            <b-col class="my-auto" md="1">
                <b-button class="traiterbutton">
                    Traiter
                </b-button>
            </b-col>
        </b-row>
    </b-card>
</template>

<style scoped>
    .item {
        border-radius: 8px;
        margin-bottom: 5px;
    }
    .item > .card-body {
        padding: 1rem;
    }
    .maintext {
        font-size: 14px;
        font-weight: bold;
    }
    .location {
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
    .badge {
        border: 1px solid;
        border-radius: 24px;
        font-size: 12px;
        font-weight: normal;
        background-color: #FFFFFF;
    }
    .made {
        color: #1F252D;
        border-color: #DDE4EA;
    }
    .contact {
        border-color: #737373;
        max-width: 121px;
        overflow: hidden;
        color: #737373;
    }
    .verified {
        background-color: #F1F5EE;
        border-color: #4E9E28;
        color: #4E9E28;
    }
    .homebadge {
        border-color: #7582F6;
        color: #7582F6;
    }
    .costcontainer {
        text-align: right;
    }
    .traiterbutton {
        background-color: #E1E4F0;
        color: #1F252D;
        border-color: transparent;
    }
</style>

<script lang="ts">
    export default {
        props: {
            maintext: String,
            location: String,
            values: Array,
            badges: Array,
            contact: Object,
            home: Object,
            cost: String,
            costdate: String
        },
        data() {
            
        }    
    }
</script>