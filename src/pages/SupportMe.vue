<template>
  <div id="support-me">
    <div class="support-me q-py-xl">
      <div class="page-header text-h3 text-weight-bold q-mt-lg">Support Me</div>
      <div class="page-info q-my-lg">
        If you would like to buy me coffee or donate, feel free to use the
        following options to support me. I will highly appreciate. Thank you in
        advance.
      </div>

      <div class="content">
        <div class="content-header">
          <img src="../assets/m-pesa.png" alt="MPESA logo" />
        </div>
        <ul>
          <li>Go to M-PESA menu</li>
          <li>Select Lipa na M-PESA</li>
          <li>Select Buy Goods and Services</li>
          <li>Enter Till Number: <b>9032455</b></li>
          <li>Enter Amount:</li>
          <li>Enter M-PESA Pin:</li>
          <li>Click <b>Send</b></li>
        </ul>

        <div class="pp-header q-mt-xl">
          <img src="../assets/paypal-logo-200px.png" alt="paypal logo" />
        </div>
        <q-btn
          unelevated
          rounded
          no-caps
          class="pp-btn q-mt-md q-ml-lg"
          href="https://www.paypal.com/donate/?hosted_button_id=4P332HCDBVMHY"
          target="_blank"
          icon="fab fa-paypal"
          label="Donate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SupportMe",
});
</script>

<style lang="scss" scoped>
#support-me {
  font-family: "Avenir";
  padding-bottom: 64px;
}
.support-me {
  width: 100%;
  max-width: 635px;
  margin: 0 auto;
}
.page-header {
  font-size: 3rem;
}

.content {
  border-radius: 12px;
  padding: 48px;
  background-color: rgba(244, 244, 246);
}
.content-header img {
  width: 35%;
  height: auto;
}
.pp-header img {
  width: 20%;
  height: auto;
}

.pp-btn {
  color: rgba(17, 47, 130);
  background-color: rgba(248, 211, 93);
}

@media only screen and (max-width: 575px) {
  #support-me {
    padding-bottom: 0;
  }
  .page-header,
  .page-info {
    padding-left: 16px;
    padding-right: 16px;
  }
  .page-header {
    font-size: 2rem;
  }
  .support-me {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .content {
    padding: 32px 16px;
    padding-bottom: 64px;
    border-radius: 0;
  }

  .content-header img {
    width: 50%;
    height: auto;
  }
  .pp-header img {
    width: 30%;
    height: auto;
  }
}
</style>
