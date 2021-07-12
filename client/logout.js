class Logout {
  constructor($root) {
    this.$root = $root;
    console.log("hello");

    this.fetchData();
  }

  fetchData = () => {
    fetch("http://3.36.97.25:5000/good")
      .then((res) => {
        const a = res.json();
        return a;
      })
      .then((res) => {
        console.log(res);
        this.render();
      });
  };

  render() {
    this.$root.innerHTML = `
    <a href="#login">로그인</a>
    <a href="/client/index.html">메인</a>
    `;
  }
}

export default Logout;
