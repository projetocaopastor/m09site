<template>
  <div>
    <Introduction />
    <!-- <Phrase1 /> -->
    <MaterialContent />
    <!-- <CourseContent /> -->
    <CourseContentExpansion />
    <SaleSectionPacks />
    <SaleSection />
    <Depositions />
    <FAQ />
  </div>
</template>

<script lang="ts" setup>
import Depositions from '../components/Home/Depositions.vue';
import Introduction from '../components/Home/Introduction.vue';
import Phrase1 from '../components/Home/Phrase1.vue';
import MaterialContent from '../components/Home/MaterialContent.vue';
import FAQ from '../components/Home/FAQ.vue';
import CourseContent from '../components/Home/CourseContent.vue';
import SaleSection from '../components/Home/SaleSection.vue';
import CourseContentExpansion from '../components/Home/CourseContentExpansion.vue';
import SaleSectionPacks from '../components/Home/SaleSectionPacks.vue';

</script>