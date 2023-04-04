<template>
  <div class="flex flex-col justify-center bg-cyan-600">

    <!-- Navbar -->
    <DefaultNavbar />

    <!-- Main Body -->
    <main class="flex justify-center">
      <div class="container px-10">
        <slot />
      </div>
    </main>

    <!-- Footer -->
    <DefaultFooter />
  </div>
</template>