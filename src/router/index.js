import ItemDetails from '@/components/views/ItemDetails.vue'
import Test from '@/components/views/Test.vue';
import Inventory from '@/components/views/Inventory.vue';

export const routes=[
    {
      path: '/',
      component: Test
    },
    {
      path:"/products",
      component:Inventory
    },
    {
      path:'/product/:id',
      component:ItemDetails
    },
];
