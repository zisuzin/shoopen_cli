<template>
  <div class="subbx">
    <div class="all">
      <a href="#" v-text="$store.state.setsubtit1" v-on:click.prevent="linkData($store.state.lnbsrc, 'new')"></a>
      <a href="#" v-text="$store.state.setsubtit2" v-on:click.prevent="linkData($store.state.lnbsrc, 'best')"></a>
    </div>
    <dl class="sub">
      <dt class="all"><a href="#" v-text="$store.state.setsubtit3" v-on:click.prevent="linksys($store.state.lnbsrc, 'shoes', '전체')"></a></dt>
      <dd v-for="(v, n) in $store.state.setdpt1" :key="n" v-on:click.prevent="linksys($store.state.lnbsrc, 'shoes', v)">
        <a href="#">{{ v }}</a>
      </dd>
    </dl>
    <dl class="sub">
      <dt><a href="#" v-text="$store.state.setsubtit4" v-on:click.prevent="linksys($store.state.lnbsrc, 'bag', '전체')"></a></dt>
      <dd v-for="(v, n) in $store.state.setdpt2" :key="n" v-on:click.prevent="linksys($store.state.lnbsrc, 'bag', v)">
        <a href="#">{{ v }}</a>
      </dd>
    </dl>
    <dl class="sub">
      <dt><a href="#" v-text="$store.state.setsubtit5" v-on:click.prevent="linksys($store.state.lnbsrc, 'ac', '전체')"></a></dt>
      <dd v-for="(v, n) in $store.state.setdpt3" :key="n" v-on:click.prevent="linksys($store.state.lnbsrc, 'ac', v)">
        <a href="#">{{ v }}</a>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  methods: {
    // gnb클릭시 링크시스템
    linksys(pm1, pm2, pm3) {
      this.$router.push(`/product?cat=${pm1}&${pm2}&${pm3}`).catch(() => {});
    },
    // // new, best 클릭 전용 링크시스템!! (위랑 헷갈리지 말기!)
    linkData(pm1, pm2) {
      this.$router.push(`/product?cat=${pm1}&${pm2}`).catch(() => {});
    },
  },
};
</script>
