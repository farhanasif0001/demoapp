<template>
<div>
    <Header/>
    <b-row class="main m-0">
        <b-col md="9" sm="12" class="pt-4 pl-5">
            <b-row class="maincard m-0">
                <h6>
                  🏡 Mes biens à traiter (10)
                  &nbsp;&nbsp;<b-icon icon="arrow-right"></b-icon>
                </h6>
            </b-row>
            <b-row class="m-0">
                <b-col>
                    <b-row>
                        <h6>
                            🚀 Mes objectifs du jour
                        </h6>
                    </b-row>
                    <b-row>
                        <b-col md="auto">
                            <BottomBox 
                                :title="'Biens à traiter'"
                                :description="'Objectif du jour'"
                                :rating="'traités aujourd’hui'"
                                :progress="53"
                                :progressColor="'#7582F6'"
                            />
                        </b-col>
                        <b-col md="auto">
                            <BottomBox 
                                :title="'Relances à traiter'"
                                :description="'Objectif du jour '"
                                :rating="'traités aujourd’hui'"
                                :progress="53"
                                :progressColor="'#4E9E28'"
                            />
                        </b-col>
                        <b-col md="auto">
                            <BottomBoxTwo 
                                :items="bottomBoxTwoItems"
                            />
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>
        <b-col md="3" sm="12" class="rightbox pr-0 pt-4">
            <b-col>
                <b-row>
                    <b-col>
                        <h6>
                          🎯 Mes relances à faire
                          &nbsp;&nbsp;<b-icon icon="arrow-right"></b-icon>
                        </h6>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        
                    </b-col>
                </b-row>
            </b-col>
        </b-col>
    </b-row>
</div>
</template>

<style scoped>
    .main {
        height: 100vh;
        width: 100%;
        background-color: #F7FAFC;
    }
    .rightbox {
        background-color: #FFFFFF;
    }
    .maincard {
        max-height: 397px;
        min-height: 70px;
    }
</style>

<script>
export default {
    data() {
        return {
            bottomBoxTwoItems: [{
                id: 1,
                count: 4,
                text: 'Relances',
                type: 'téléphoniques',
                icon: 'telephone'
            },
            {
                id: 1,
                count: 10,
                text: 'Relances',
                type: 'SMS',
                icon: 'telephone'
            },
            {
                id: 1,
                count: 4,
                text: 'Relances',
                type: 'mail',
                icon: 'telephone'
            },
            {
                id: 1,
                count: 4,
                text: 'Relances',
                type: 'courrier',
                icon: 'telephone'
            }]
        }
    }
}
</script>