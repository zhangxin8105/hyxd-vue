<template>
    <div style="width: 375px">
        <div class="hyxd_body">
            <div class="xui_item">
                <label>your name: </label>
                <div class="xui_content xui_input_search">
                    <input type="text" class="xui_input" v-model="name" placeholder="type here" />
                </div>
            </div>
            <button class="xui_btn xui_btn_default" @click="handleToSearch">search</button>
        </div>
        <div class="role_name">
            <div>选择你的英雄昵称</div>
            <div v-for="(item, index) in $store.state.nameList" 
                :key="index"
                @click="handleToQuery(item.role_id)"
                v-show="!message"
            >{{item.role_name}}</div>
            <p v-show="message">{{message}}</p>
        </div>
        <div v-show="record.role_name">
            <section class="grade-top-container">
                <section class="grade-top">
                    <div class="stat">
                        <div class="portrait" style="background-image:url(${d.portrait})"></div>
                        <div class="s1">
                            <span class="t">{{record.role_name}}</span>
                        </div>
                        <dl class="s2">
                            <dd>总场数 {{record.total}}</dd>
                            <dd>获胜 {{record.total_wins}}</dd>
                            <dd>前十数 {{record.top10}}</dd>
                            <dd>K/D {{record.kd && record.kd.toFixed(2)}}</dd>
                        </dl>
                        <div class="s3">
                            <span class="t">{{record.rating && record.rating.toFixed(2)}}</span>
                            <span class="desc">综合Rating</span>
                            <span class="t tl">{{record.rank && (record.rank/10000).toFixed(1)}}万</span>
                            <span class="desc">排名</span>
                        </div>
                    </div>    
                </section>
            </section>
            <section class="grade-c-container">
                <section class="grade-c">
                    <div class="radar-box">
                        <div class="radar" id="radar"></div>
                    </div>
                    <div class="rating">
                        <div class="head">
                            <dl>
                                <dd>
                                    <span class="score">{{record.total_kill}}</span>
                                    <span class="ps">总击败数</span>
                                </dd>
                                <dd>
                                    <span class="score">{{record.avg_kill && record.avg_kill.toFixed(2)}}</span>
                                    <span class="ps">场均击败</span>
                                </dd>
                                <dd>
                                    <span class="score">{{record.top_kill}}</span>
                                    <span class="ps">最高击败</span>
                                </dd>
                            </dl>
                        </div>
                        <dl class="gz">
                            <dd>
                                <span class="score">{{(record.win_rate) && ((record.win_rate)*100).toFixed(2)}}%</span>
                                <span class="ps">获胜率</span>
                            </dd>
                            <dd>
                                <span class="score">{{(record.top10_rate) && ((record.top10_rate)*100).toFixed(2)}}%</span>
                                <span class="ps">前十率</span>
                            </dd>
                            <dd>
                                <span class="score">{{record.avg_damage && record.avg_damage.toFixed(2)}}</span>
                                <span class="ps">场均伤害</span>
                            </dd>
                            <dd>
                                <span class="score">{{record.avg_combat_time && (record.avg_combat_time/60).toFixed(1)}}分钟</span>
                                <span class="ps">场均生存时长</span>
                            </dd>
                            <dd>
                                <span class="score">{{record.top_rating}}</span>
                                <span class="ps">最高Rating</span>
                            </dd>
                            <dd>
                                <span class="score">{{Math.ceil(record.solo_rating)}}</span>
                                <span class="ps">单人Rating</span>
                            </dd>
                            <dd>
                                <span class="score">{{Math.ceil(record.duo_rating)}}</span>
                                <span class="ps">双人Rating</span>
                            </dd>
                            <dd>
                                <span class="score">{{Math.ceil(record.squad_rating)}}</span>
                                <span class="ps">组队Rating</span>
                            </dd>
                        </dl>
                    </div>
                </section>
                <div class="people"></div>
            </section>
        </div>
    </div>
</template>

<script type="text/javascript">
import index from './index';
import { mapGetters, mapActions, mapState} from 'vuex';

export default{
    data(){
        return{
            name: '电竞毒瘤me',
        }
    },
    created(){
    },
    computed: {
        ...mapGetters(['getName']),
        ...mapState(
            [
                'record', 
                'test',
                'message'
            ]
        )
    },
    mounted(){
        this.$nextTick(function(){
            
        })
    },
    watch: {
        record(){
            return this.record;
        }
    },
    methods: {
        handleToSearch(){
            const p = {
                role_name: this.name
            };
            this.getRoleName(p);
        },
        handleToQuery(id){
            const p = {
                role_id: id
            };
            this.getRoleRecords(p);
        },
        ...mapActions(['getRoleName', 'getRoleRecords'])
    },
    components: {
        index
    },
}
</script>