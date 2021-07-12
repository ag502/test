class Login {
  constructor($root) {
    this.$root = $root;
    console.log("hi");
    this.fetchData();
  }

  fetchData = () => {
    fetch("http://3.36.97.25:5000/test")
      .then((res) => {
        const a = res.json();
        return a;
      })
      .then((res) => {
        console.log(res);
        this.render(this.$root);
      });
  };

  render() {
    const $linkTag = `
      <a href="#logout">로그아웃</a>
      <a href="/client/index.html">메인</a>
    `;
    this.$root.innerHTML = $linkTag;
  }
}

export default Login;
