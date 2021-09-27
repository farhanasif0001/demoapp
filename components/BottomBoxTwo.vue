<template>
    <div class="bottomcard">
        <b-card>
            <b-row>
                <b-col class="bottomcard-title">
                    Relances en retard
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col v-for="item in items" :key="item.id">
                    <b-card class="innerbox">
                        <b-row style="'height: inherit'">
                            <b-col>
                                <b-icon class="ml-2" :icon="item.icon"></b-icon>
                            </b-col>
                        </b-row>
                        <b-row class="count-container center">
                            <span class="count">{{item.count}}</span>
                        </b-row>
                        <b-row>
                            <b-col class="center">
                                <p class="type">
                                    {{item.text}}<br/>
                                    {{item.type}}
                                </p>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b><b-icon class="float-right mt-3" icon="arrow-right"></b-icon></b>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<style scoped>
    .bottomcard {
        font-size: 12px;
        width: 100%;
        color: #1F252D;
    }
    .bottomcard-title {
        font-size: 14px;
        font-weight: bold;
        color: #1F252D;
    }
    .innerbox, .innerbox > .card-body {
        height: 96px;
        width: 85px;
        padding: 0!important;
        background-color: #F7FAFC;
    }
    .count-container {
        height: 45px;
    }
    .center {
        align-items: center;
        text-align: center;
        justify-content: center;
        display: flex;
    }
    .type {
        font-weight: bold;
        font-size: 10px;
        color: #FC5C79;
    }
    .count {
        margin-top: -18px;
        font-size: 50px;
        color: #FC5C79;
    }
</style>

<script>
export default {
    props: {
        items: Array
    },
    data() {
      return {
        max: 100
      }
    }
  }
</script>
