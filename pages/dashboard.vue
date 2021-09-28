<template>
<div>
    <Header/>
    <b-row class="main m-0">
        <b-col md="9" sm="12" class="pt-4 pl-5">
            <b-row class="maincard m-0">
                <b-col>
                    <b-row>
                        <h6>
                          🏡 Mes biens à traiter (10)
                          &nbsp;&nbsp;<b-icon icon="arrow-right"></b-icon>
                        </h6>
                    </b-row>
                    <b-row>
                        <b-col>
                            <Item
                                v-for="item in items"
                                :key="item.id"
                                :maintext="item.maintext"
                                :location="item.location"
                                :values="item.values"
                                :badges="item.badges"
                                :contact="item.contact"
                                :home="item.home"
                                :cost="item.cost"
                                :costdate="item.costdate"
                            />
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row class="m-0 mt-5">
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
                        <b-col md="">
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
            }],
            items: [
                {
                    maintext: '10 rue du Normand de la Grange aux...',
                    location: 'Paris, 03400',
                    values: [
                        {id: 1, icon: 'telephone'},
                        {id: 2, icon: 'calendar'}
                    ],
                    badges: [
                        {id: 1, icon: 'telephone', text: 'Appeler dans les 24h'},
                        {id: 2, icon: 'door', text: 'Porte à porte dans les 24h'}
                    ],
                    contact: {
                        text: '06 59 30 29 93',
                        verified: false
                    },
                    home: {
                        text: '< 6 mois',
                        icon: 'home'
                    },
                    cost: '250 000 € - 265 000 €',
                    costdate: 'le 20/02/2021'
                },
                {
                    maintext: '10 rue du Normand de la Grange aux...',
                    location: 'Paris, 03400',
                    values: [
                        {id: 1, icon: 'telephone'},
                        {id: 2, icon: 'calendar'}
                    ],
                    badges: [
                        {id: 1, icon: 'telephone', text: 'Appeler dans les 24h'},
                        {id: 2, icon: 'door', text: 'Porte à porte dans les 24h'}
                    ],
                    contact: {
                        text: '06 59 30 29 93',
                        verified: false
                    },
                    home: {
                        text: '< 6 mois',
                        icon: 'home'
                    },
                    cost: '250 000 € - 265 000 €',
                    costdate: 'le 20/02/2021'
                }
            ]
        }
    }
}
</script>