<template>
  <div>
    search
    <h1>params参数{{ $route.params.keyword }}</h1>
    <h1>query参数: {{ $route.query.k }}</h1>
    <h1>通过路由传递的参数: {{ keyword }}</h1>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["keyword"],
};
</script>

<style></style>
