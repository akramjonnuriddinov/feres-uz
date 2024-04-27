<script setup lang="ts">
const links = [
  {
    name: 'Home',
    path: '/',
    innerLinks: [
      {
        name: '',
        path: '',
      },
    ],
  },
  {
    name: 'About society',
    path: '#',
    innerLinks: [
      {
        name: 'History of JSC "Fergana Regional Electric Networks Enterprise',
        path: '',
      },
      {
        name: 'Leadership',
        path: '',
      },
      {
        name: 'Information on vacancies in the society',
        path: '',
      },
      {
        name: 'Organizational structure of the society',
        path: '',
      },
      {
        name: "Subject and goals of the society's activity",
        path: '',
      },
      {
        name: 'Info',
        path: '',
      },
      {
        name: 'Certificates and licenses of the Company',
        path: '',
      },
      {
        name: 'Branches of society',
        path: '',
      },
      {
        name: 'Manufactured products by society',
        path: '',
      },
      {
        name: 'Information about the development strategy of the Company',
        path: '',
      },
      {
        name: 'Conducted public events of the society',
        path: '',
      },
      {
        name: 'Anti-corruption policy',
        path: '',
      },
      {
        name: 'Collegial and advisory bodies formed in society',
        path: '',
      },
    ],
  },
  {
    name: 'Corporate Governance',
    path: '#',
    innerLinks: [
      {
        name: 'Voting results and adopted decisions of the general meeting of shareholders',
        path: '',
      },
      {
        name: 'Notices of the general meeting of shareholders.',
        path: '',
      },
      {
        name: 'Information on the purchase of shares by the company.',
        path: '',
      },
      {
        name: ' Information about dividends',
        path: '',
      },
      {
        name: "Auditor's report",
        path: '',
      },
      {
        name: 'Certificate',
        path: '',
      },
      {
        name: 'Charter of the society',
        path: '',
      },
      {
        name: 'Society Founders',
        path: '',
      },
      {
        name: 'Business plan',
        path: '',
      },
      {
        name: 'CODE OF CORPORATE GOVERNANCE',
        path: '',
      },
      {
        name: 'Internal statutes',
        path: '',
      },
      {
        name: 'Management and control bodies',
        path: '',
      },
      {
        name: 'Essential Fatty',
        path: '',
      },
      {
        name: 'annual and quarterly reports',
        path: '',
      },
      {
        name: 'Prospectus for the issue of securities',
        path: '',
      },
      {
        name: 'Marketing plan',
        path: '',
      },
      {
        name: 'Key indicators of society',
        path: '',
      },
      {
        name: 'Affiliates',
        path: '',
      },
    ],
  },
  {
    name: 'Interactive services',
    path: '#',
    innerLinks: [
      {
        name: 'Surveying public opinion and discussing issues related to community activities',
        path: '',
      },
      {
        name: 'personal account',
        path: '',
      },
      {
        name: 'Electricity tariffs',
        path: '',
      },
      {
        name: 'Receiving applications from legal entities and individuals',
        path: '',
      },
      {
        name: 'Consumer electricity calculation calculator',
        path: '',
      },
    ],
  },
  {
    name: 'News',
    path: '#',
    innerLinks: [
      {
        name: 'News',
        path: '/news',
      },
    ],
  },
  {
    name: 'Info',
    path: '#',
    innerLinks: [
      {
        name: 'Info',
        path: '/info',
      },
    ],
  },
  {
    name: 'Connection',
    path: '/connection',
    innerLinks: [
      {
        name: '',
        path: '',
      },
    ],
  },
]

const isInnerLinkLength = (link: any) => {
  return link.innerLinks[0].name.length > 0
}

const isOpen = ref(false)
const toggleDropDown = (id: any) => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="text-white bg-brown lg:sticky lg:z-50 lg:top-0">
    <div class="v-container">
      <nav class="px-4 py-2">
        <button
          class="py-1 px-3 rounded-md text-[#ffffff80] border border-[#ffffff1a] lg:hidden"
        >
          <icon-bars class="w-[30px] h-[30px]" />
        </button>
        <ul class="flex flex-col lg:justify-center lg:flex-row lg:relative">
          <li v-for="link in links" :key="link.name" class="">
            <nuxt-link
              :to="link.path"
              @click="toggleDropDown"
              :class="{
                'dropdown-toggle': isInnerLinkLength(link),
              }"
              class="inline-block py-2 lg:px-2 nav-link"
              >{{ link.name }}</nuxt-link
            >
            <ul
              v-if="isInnerLinkLength(link)"
              :class="{ hidden: !isOpen }"
              class="min-w-fit max-w-fit bg-brown border border-[#00000026] py-2 rounded lg:absolute"
            >
              <li v-for="innerLink in link.innerLinks" :key="innerLink.name">
                <nuxt-link
                  :to="innerLink.path"
                  class="block py-1 px-[1.5rem] whitespace-nowrap"
                  >{{ innerLink.name }}</nuxt-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: '';
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.nav-link:hover + ul {
  display: block !important;
  z-index: 100;
}
</style>
