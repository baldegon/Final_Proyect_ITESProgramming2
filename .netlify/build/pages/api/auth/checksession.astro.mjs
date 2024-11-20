import { s as supabase } from '../../../chunks/supabase_CfMgWXZK.mjs';
export { renderers } from '../../../renderers.mjs';

async function checkUserSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    checkUserSession
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
