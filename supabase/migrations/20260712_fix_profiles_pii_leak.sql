-- =====================================================================
-- FIX BẢO MẬT: Rò rỉ PII qua bảng public.profiles
-- Phát hiện 2026-07-12: anon key (công khai trong frontend) đọc được
-- full_name + phone + role của MỌI người dùng → vi phạm NĐ 13/2023.
--
-- Cách vá (an toàn, ít rủi ro vỡ app nhất): giữ các cột hiển thị công khai
-- (tên, avatar, bio, gamification) nhưng CHẶN các cột nhạy cảm (phone,
-- last_login, last_active_date) đối với vai trò anon.
--
-- HOÀN TÁC nếu cần: GRANT SELECT ON public.profiles TO anon;
-- =====================================================================

REVOKE SELECT ON public.profiles FROM anon;

GRANT SELECT (id, full_name, avatar_url, bio, role, tier, xp, level, streak, created_at, updated_at)
  ON public.profiles TO anon;

-- (Tùy chọn NGHIÊM NGẶT hơn — nếu web KHÔNG cần khách vãng lai đọc profile:
--  bỏ 2 lệnh trên, thay bằng dòng dưới để chặn anon đọc profiles hoàn toàn)
-- REVOKE SELECT ON public.profiles FROM anon;
