<template>
  <div class="container">
    <div class="column">
      <dl>
        <dt>用户帮助</dt>
        <dd v-for="ele in oHelp" :key="ele.title">
          <router-link to="/">{{ele.title}}</router-link>
        </dd>
      </dl>
      <dl>
        <dt>美团服务</dt>
        <dd v-for="ele in Service" :key="ele.title">
          <router-link to="/">{{ele.title}}</router-link>
        </dd>
      </dl>
    </div>
    <div class="column">
      <dl>
        <dt>商家合作</dt>
        <dd v-for="ele in Cooperation" :key="ele.title">
          <router-link to="/">{{ele.title}}</router-link>
        </dd>
      </dl>
    </div>
    <div class="column">
      <dl>
        <dt>代理商加盟</dt>
        <dd v-for="ele in Angcy" :key="ele.title">
          <router-link to="/">{{ele.title}}</router-link>
        </dd>
      </dl>
      <dl>
        <dt>美团规则</dt>
        <dd v-for="ele in Rules" :key="ele.title">
          <router-link to="/">{{ele.title}}</router-link>
        </dd>
      </dl>
    </div>
    <div class="column">
      <dl>
        <dt>关注美团</dt>
        <dd>
          <router-link to="/">美团新浪微博</router-link>
        </dd>
      </dl>
      <dl>
        <dt>公司信息</dt>
        <dd v-for="ele in msg" :key="ele.title">
          <router-link to="/">{{ele.title}}</router-link>
        </dd>
      </dl>
      <dl>
        <dt>廉政举报</dt>
        <dd>
          <router-link to="/">廉政举报平台</router-link>
        </dd>
      </dl>
      <dl>
        <dt>知识产权</dt>
        <dd>
          <router-link to="/">知识产权维权平台</router-link>
        </dd>
      </dl>
    </div>
    <div class="column">
      <dl>
        <dt>消费之服务热线</dt>
        <dd v-for="ele in customerHotline" :key="ele.title">
          <router-link to="/">{{ele.title}}</router-link>
        </dd>
      </dl>
      <dl>
        <dt>商家服务热线</dt>
        <dd v-for="ele in merchatHotline" :key="ele.title">
          <router-link to="/">{{ele.title}}</router-link>
        </dd>
      </dl>
      <dl>
        <dt>
          <router-link to="/">商家自助入住美团入口</router-link>
        </dt>
      </dl>
      <dl>
        <dt>
          <router-link to="/">供应商注册入口</router-link>
        </dt>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oHelp: [
        {
          title: "申请退款"
        },
        {
          title: "查看美团券密码"
        },
        {
          title: "常见问题"
        },
        {
          title: "用户协议"
        },
        {
          title: "隐私政策"
        },
        {
          title: "反诈骗公告"
        },
        {
          title: "消费者权益保障"
        }
      ],
      Service: [
        {
          title: "美团外卖"
        },
        {
          title: "美团酒店"
        },
        {
          title: "猫眼电影"
        },
        {
          title: "美团配送"
        },
        {
          title: "美团云"
        },
        {
          title: "大众点评"
        },
        {
          title: "美团民宿"
        },
        {
          title: "无人配送"
        }
      ],
      Cooperation: [
        {
          title: "美团餐饮商户中心"
        },
        {
          title: "美食商家入驻(非外卖)"
        },
        {
          title: "美团外卖开店申请"
        },
        {
          title: "美团收银官网"
        },
        {
          title: "外卖配送加盟申请"
        },
        {
          title: "美团点评餐饮学院"
        },
        {
          title: "酒店商家入驻"
        },
        {
          title: "境内度假商家入驻"
        },
        {
          title: "综合商家入驻"
        },
        {
          title: "美团民宿房东商家入驻"
        },
        {
          title: "商家开票申请"
        },
        {
          title: "美团点评智能收银机"
        },
        {
          title: "美团点评餐饮开放平台"
        },
        {
          title: "美团点评收单"
        },
        {
          title: "免费使用美团排队"
        },
        {
          title: "快驴进货商家合作"
        },
        {
          title: "美团闪购商家入驻"
        }
      ],
      Angcy: [
        {
          title: "美团外卖代理商招募"
        },
        {
          title: "到店餐饮代理商招募"
        },
        {
          title: "非餐饮代理商招募"
        },
        {
          title: "美团联盟"
        },
        {
          title: "美团收银招募线上分销商"
        },
        {
          title: "美团点评5S服务商招募"
        },
        {
          title: "美团收单渠道代理商招募"
        }
      ],
      Rules: [
        {
          title: "规则中心"
        },
        {
          title: "规则目录"
        },
        {
          title: "规则评议院"
        }
      ],
      msg: [
        {
          title: "关于我们"
        },
        {
          title: "投资者关系"
        },
        {
          title: "加入我们"
        },
        {
          title: "商户诚信公约及管理办法"
        },
        {
          title: "保险经纪资质"
        }
      ],
      customerHotline: [
        {
          title: "外卖消费者：10109777"
        },
        {
          title: "猫眼消费者：10105335"
        },
        {
          title: "其他消费者：10107888"
        }
      ],
      merchatHotline: [
        {
          title: "外卖&餐饮商家：10105557"
        },
        {
          title: "休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：10100107"
        }
      ],
      complainHotline: [
        {
          title: "违法和不良信息举报电话：4006018900"
        },
        {
          title: "举报邮箱：tousujubao@meituan.com"
        }
      ]
    };
  }
};
</script>

<style scoped lang='less'>
.container {
  padding: 40px 28px;
  width: 1160px;
  * {
    vertical-align: top;
  }
  .column {
    width: 220px;
    display: inline-block;
    dl {
      width: 220px;
      margin: 0 0 20px 0;
      dt {
        font-size: 14px;
        font-weight: 500;
        color: #333;
        line-height: 28px;
      }
      dd {
        color: #666;
        line-height: 24px;
        font-size: 12px;
        margin: 0;
      }
      dd:hover {
        color: #fe8c00;
      }
    }
  }
}
</style>