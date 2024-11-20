/* empty css                                           */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DdE926XU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_y4kWyvKk.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Register = createComponent(($$result, $$props, $$slots) => {
  const title = "Register";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Register", "data-astro-cid-qraosrxq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#0A0A0F] bg-cover bg-center bg-fixed relative flex items-center justify-center p-4" data-astro-cid-qraosrxq> <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-red-500/10 to-cyan-500/10 pointer-events-none" data-astro-cid-qraosrxq></div> <div class="w-full max-w-md relative" data-astro-cid-qraosrxq> <div class="bg-black/40 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-lg shadow-red-500/10" data-astro-cid-qraosrxq> <div class="text-center mb-8" data-astro-cid-qraosrxq> <h1 class="text-3xl font-bold mb-2" data-astro-cid-qraosrxq> <span class="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 text-transparent bg-clip-text" data-astro-cid-qraosrxq> ${title} </span> </h1> <p class="text-gray-300 text-sm" data-astro-cid-qraosrxq>
Already have an account?
<a href="/#" class="text-cyan-400 hover:text-cyan-300 transition-colors font-medium ml-1" data-astro-cid-qraosrxq>
Sign in
</a> </p> </div> <form action="/api/auth/register" method="post" class="space-y-6" data-astro-cid-qraosrxq> <div class="space-y-2" data-astro-cid-qraosrxq> <label for="email" class="block text-sm font-medium text-emerald-400" data-astro-cid-qraosrxq>
Email
</label> <input id="email" type="email" name="email" required class="w-full p-3 rounded-lg bg-black/50 border border-cyan-500/20 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" placeholder="Enter your email" data-astro-cid-qraosrxq> </div> <div class="space-y-2" data-astro-cid-qraosrxq> <label for="password" class="block text-sm font-medium text-emerald-400" data-astro-cid-qraosrxq>
Password
</label> <input id="password" type="password" name="password" required class="w-full p-3 rounded-lg bg-black/50 border border-cyan-500/20 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" placeholder="Create a password" data-astro-cid-qraosrxq> </div> <button type="submit" class="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg shadow-red-500/20 font-medium" data-astro-cid-qraosrxq>
Create Account
</button> </form> <div class="mt-6 text-center" data-astro-cid-qraosrxq> <p class="text-sm text-gray-400" data-astro-cid-qraosrxq>
By registering, you agree to our
<a href="/terms" class="text-cyan-400 hover:text-cyan-300 transition-colors" data-astro-cid-qraosrxq>Terms of Service</a>
and
<a href="/privacy" class="text-cyan-400 hover:text-cyan-300 transition-colors" data-astro-cid-qraosrxq>Privacy Policy</a> </p> </div> </div> </div> </main> ` })} `;
}, "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/pages/register.astro", void 0);

const $$file = "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
