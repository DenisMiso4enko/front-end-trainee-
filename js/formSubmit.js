const form = document.querySelector(".form");
import { Modal } from "./modal";

export async function handleSubmitForm(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  new Modal("You have successfully subscribed to the email newsletter");

  const request = await fetch("url", {
    method: "POST",
    body: JSON.stringify(data),
  });

  form.reset();
}
