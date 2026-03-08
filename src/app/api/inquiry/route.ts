import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const resendApiKey = process.env.RESEND_API_KEY || "";
const notifyEmail = process.env.NOTIFY_EMAIL || "smatact@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { program_id, name, email, phone, organization, inquiry_type, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "이름과 이메일은 필수입니다." }, { status: 400 });
    }

    // 1. Supabase에 저장
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data: inquiry, error: dbError } = await supabase
      .from("certification_inquiries")
      .insert({
        program_id: program_id || null,
        name,
        email,
        phone: phone || null,
        organization: organization || null,
        inquiry_type: inquiry_type || "individual",
        message: message || null,
        source: "website",
      })
      .select("*, certification_programs(title, icon)")
      .single();

    if (dbError) {
      throw new Error(dbError.message);
    }

    // 2. 관리자에게 이메일 알림
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const certInfo = inquiry.certification_programs;
      const certTitle = certInfo ? `${certInfo.icon} ${certInfo.title}` : "전체 과정 상담";
      const typeLabels: Record<string, string> = {
        individual: "개인 수강",
        group: "단체 교육",
        corporate: "기관/기업",
      };

      await resend.emails.send({
        from: "스마택트 자격증 <onboarding@resend.dev>",
        to: notifyEmail,
        subject: `[수강신청] ${name}님 - ${certTitle}`,
        html: `
          <div style="font-family: 'Apple SD Gothic Neo', sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #0d9488, #0f766e); padding: 24px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 20px;">새로운 수강 신청이 접수되었습니다</h1>
            </div>
            <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #6b7280; width: 100px;">자격증</td><td style="padding: 8px 0; font-weight: 600;">${certTitle}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280;">이름</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280;">이메일</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280;">전화</td><td style="padding: 8px 0;">${phone || "-"}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280;">소속</td><td style="padding: 8px 0;">${organization || "-"}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280;">유형</td><td style="padding: 8px 0;">${typeLabels[inquiry_type] || "개인 수강"}</td></tr>
              </table>
              ${message ? `<div style="margin-top: 16px; padding: 12px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;"><p style="color: #6b7280; margin: 0 0 4px; font-size: 13px;">문의 내용</p><p style="margin: 0; color: #1f2937;">${message}</p></div>` : ""}
              <p style="margin-top: 20px; color: #9ca3af; font-size: 12px;">
                이 알림은 스마택트 자격증 사이트에서 자동 발송되었습니다.
              </p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true, id: inquiry.id });
  } catch (error) {
    const message = error instanceof Error ? error.message : "서버 오류가 발생했습니다.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
