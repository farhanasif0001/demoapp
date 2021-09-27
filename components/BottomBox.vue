<template>
    <div class="bottomcard">
        <b-card>
            <b-row>
                <b-col class="bottomcard-title">
                    {{title}}
                </b-col>
            </b-row>
            <b-row class="descriptionbox">
                <b-col>
                    {{description}}
                </b-col>
            </b-row>
            <b-row>
                <b-col md="10" class="bottomcard-rating pr-0">
                    <b>8/9</b> {{rating}}
                </b-col>
                <b-col md="2" class="p-0">
                    🏆
                </b-col>
            </b-row>
            <b-row>
                <b-col class="p-1">
                    <b-progress :value="progress" :max="max" class="progressbar"></b-progress>
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
        width: 202px;
        font-size: 12px;
        color: #828282;
    }
    .bottomcard-title, .bottomcard-rating > b {
        font-size: 14px;
        font-weight: bold;
        color: #1F252D;
    }
    .bottomcard-rating > b {
        font-size: 12px;
    }
    .descriptionbox {
        height: 70px;
    }
    .progressbar {
        width: 100%;
        height: 10px;
    }
</style>

<script>
export default {
    props: {
        title: String,
        description: String,
        rating: String,
        progress: Number,
        progressColor: String
    },
    data() {
      return {
        max: 100
      }
    }
  }
</script>
