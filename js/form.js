const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("请填写完整的姓名、邮箱和留言内容！");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("请输入正确的邮箱格式！");
      return;
    }

    alert("提交成功！我们会尽快回复您，感谢您的留言~");
    form.reset();
  });
}
