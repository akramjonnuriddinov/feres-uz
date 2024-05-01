<script setup lang="ts">
const links = ref([
  {
    name: 'Home',
    path: '/',
    is_show: false,
    innerLinks: [
      {
        name: '',
        path: '',
      },
    ],
  },
  {
    name: 'About society',
    path: '',
    is_show: false,
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
    path: '',
    is_show: false,
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
    path: '',
    is_show: false,
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
    path: '',
    is_show: false,
    innerLinks: [
      {
        name: 'News',
        path: '/news',
      },
    ],
  },
  {
    name: 'Info',
    path: '',
    is_show: false,
    innerLinks: [
      {
        name: 'Tender and Auction Announcements',
        path: '/info',
      },
    ],
  },
  {
    name: 'Connection',
    path: '/connection',
    is_show: false,
    innerLinks: [
      {
        name: '',
        path: '',
      },
    ],
  },
])
const isOpen = ref(false)

const isInnerLinkLength = (link: any) => {
  return link.innerLinks[0].name.length > 0
}

const toggleDropDown = (index: any) => {
  links.value.forEach((link: any, link_idx) => {
    if (index != link_idx) link.is_show = false
  })
  links.value[index].is_show = !links.value[index].is_show
}

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div
    @click="$emit('close-toggle')"
    id="navbar"
    class="w-full text-white navbar bg-brown sticky top-0 z-[9999]"
  >
    <div class="v-container">
      <nav class="px-4 py-2">
        <button
          @click.stop="toggle"
          class="py-1 px-3 rounded-md text-[#ffffff80] border border-[#ffffff1a] lg:hidden"
        >
          <icon-bars class="w-[30px] h-[30px]" />
        </button>
        <app-transition class="overflow-hidden">
          <ul
            :class="{ 'hidden ': !isOpen, 'flex ': isOpen }"
            class="flex-col lg:flex lg:justify-center lg:flex-row lg:relative"
          >
            <li v-for="(link, index) in links" :key="link.name" class="">
              <nuxt-link
                :to="link.path"
                @click="toggleDropDown(index)"
                :class="{
                  'dropdown-toggle': isInnerLinkLength(link),
                }"
                class="inline-block py-2 cursor-pointer lg:px-2 nav-link"
                >{{ link.name }}</nuxt-link
              >
              <ul
                v-if="isInnerLinkLength(link)"
                :class="{ hidden: !link.is_show }"
                class="min-w-fit max-h-[500px] overflow-auto max-w-fit bg-brown border border-[#00000026] py-2 rounded lg:absolute"
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
        </app-transition>
      </nav>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

.navbar {
  box-shadow: 0px 1px 5px 0px rgba(55, 55, 55, 0.3);
}

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
</style>
