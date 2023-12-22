<template>
  <div class="p-8 py-12">
    <h2 class="font-bold mx-auto text-xl mt-12 lg:mt-0 mb-4 text-center">
      Submit your Candidacy
    </h2>
    <hr
      class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-6 dark:bg-gray-700"
    />
    <p>We do not seem to know about you.</p>
    <p class="mb-6">If you wish to join us, please tell us know about you:</p>
    <form>
      <div class="mb-6 max-w-[70%]">
        <BaseFieldSelect
          v-model="csf.position"
          name="position"
          label="Position *"
          :data="[
            { name: 'CNC Operator', value: 'cncoperator' },
            { name: 'Composite Technician', value: 'compositetechnician' },
            {
              name: 'Automation and RoboticsEngineer',
              value: 'automationandroboticsengineer',
            },
          ]"
        />
      </div>

      <fieldset class="mb-4">
        <label
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
          >Title *</label
        >
        <div class="flex items-center mb-1">
          <input
            v-model="csf.title"
            id="mr"
            type="radio"
            name="title"
            value="mr"
            class="w-4 h-4 border-gray-300"
          />
          <label for="mr" class="block ms-2 me-8">
            <SVGmale class="inline-block text-2xl" />
            Mr.
          </label>

          <input
            v-model="csf.title"
            id="miss"
            type="radio"
            name="title"
            value="miss"
            class="w-4 h-4 border-gray-300"
          />
          <label for="miss" class="block ms-2 me-8">
            <SVGfemale class="inline-block text-2xl" />
            Miss
          </label>

          <input
            v-model="csf.title"
            id="mrs"
            type="radio"
            name="title"
            value="mrs"
            class="w-4 h-4 border-gray-300"
          />
          <label for="mrs" class="block ms-2">
            <SVGfemale class="inline-block text-2xl" />
            Mrs
          </label>
        </div>
      </fieldset>

      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <BaseField
            v-model="csf.firstName"
            name="first_name"
            type="text"
            label="First Name *"
          />
        </div>
        <div>
          <BaseField
            v-model="csf.lastName"
            name="last_name"
            type="text"
            label="Last Name *"
          />
        </div>
        <div class="">
          <BaseFieldPhone
            v-model="csf.mobile"
            class=""
            name="phone"
            type="text"
            label="Phone number *"
          />
        </div>
        <div>
          <BaseFieldIcon
            v-model="csf.email"
            name="email"
            type="text"
            label="Email Address *"
          >
            <SVGatsign class="w-4 h-4 text-gray-500" />
          </BaseFieldIcon>
        </div>
        <div class="">
          <BaseFieldNationality
            v-model="csf.nationality"
            class=""
            name="nationality"
            label="Nationality *"
          />
        </div>

        <div class="">
          <BaseFieldCurrency
            v-model="csf.salary"
            name="salary"
            label="Expected Monthly Salary"
          />
        </div>
      </div>

      <div class="col-span-full mb-6">
        <BaseFieldPhoto />
      </div>

      <div class="col-span-full mb-6">
        <BaseFieldFileSimple label="Upload Resume *" />
      </div>

      <div class="mb-6">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Tell us more about yourself</label
        >
        <textarea
          id="message"
          v-model="csf.aboutSelf"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder=""
        ></textarea>
      </div>

      <div class="p-4 mb-2 text-sm text-blue-500 rounded-lg bg-blue-50" role="alert">
        <p class="mb-3">
          By proceeding, you are granting ENATA permission to process your personal data
          in order to carry out background verification checks.
        </p>
        <p class="mb-3">
          For full details of how we process your personal data, as well as an explanation
          of your rights, please see our Data Protection Policy.
        </p>

        <p class="mb-3">
          Please be aware that we may use the services of third parties and/or contact
          identified third parties (such as academic institutions and former employers) to
          verify the accuracy of any data and/or documents that you provide to us.
        </p>

        <p class="mb-6">
          The results will be held on file in accordance with our data retention policy.
        </p>

        <label class="relative inline-flex items-center mb-6 cursor-pointer">
          <input
            v-model="iAcknowledgeAgree"
            type="checkbox"
            value=""
            class="sr-only peer"
          />
          <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
          <span class="ms-3 text-sm font-bold text-blue-800 dark:text-gray-300"
            >I ACKNOWLEDGE AND AGREE</span
          >
        </label>
      </div>

      <button
        :disabled="!iAcknowledgeAgree"
        type="button"
        class="text-white bg-primary border mt-6 hover:bg-white hover:text-black hover:font-bold hover:border-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center min-w-[10rem] disabled:bg-primary/50 disabled:hover:bg-primary/50 disabled:hover:text-white disabled:hover:border-white/50 disabled:hover:font-normal"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import SVGmale from "@/assets/icons/app/gender-male.svg";
import SVGfemale from "@/assets/icons/app/gender-female.svg";
import SVGatsign from "@/assets/icons/app/at-sign.svg";

const csf = useCareerFormStore();

const iAcknowledgeAgree = ref(false);
</script>

<style lang="scss" scoped></style>
