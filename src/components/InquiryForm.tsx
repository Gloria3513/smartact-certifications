"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase, type CertificationProgram } from "@/lib/supabase";

export default function InquiryForm() {
  const [programs, setPrograms] = useState<CertificationProgram[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    program_id: "",
    name: "",
    email: "",
    phone: "",
    organization: "",
    inquiry_type: "individual" as "individual" | "group" | "corporate",
    message: "",
  });

  useEffect(() => {
    async function fetchPrograms() {
      if (!supabase) return;
      const { data } = await supabase
        .from("certification_programs")
        .select("id, title, icon, step_number")
        .eq("is_active", true)
        .order("sort_order");
      if (data) setPrograms(data as CertificationProgram[]);
    }
    fetchPrograms();
  }, []);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      if (!supabase) {
        setError("시스템 설정이 완료되지 않았습니다. 이메일로 문의해주세요.");
        setIsSubmitting(false);
        return;
      }
      const { error: submitError } = await supabase
        .from("certification_inquiries")
        .insert({
          program_id: formData.program_id || null,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          organization: formData.organization || null,
          inquiry_type: formData.inquiry_type,
          message: formData.message || null,
          source: "website",
        });

      if (submitError) throw submitError;
      setIsSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "신청 중 오류가 발생했습니다."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="pt-8 pb-8 text-center">
          <div className="text-5xl mb-4">&#10004;</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            신청이 완료되었습니다!
          </h3>
          <p className="text-gray-600 mb-6">
            빠른 시일 내에 안내 연락을 드리겠습니다.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                program_id: "",
                name: "",
                email: "",
                phone: "",
                organization: "",
                inquiry_type: "individual",
                message: "",
              });
            }}
            variant="outline"
          >
            추가 신청하기
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 자격증 선택 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              관심 자격증
            </label>
            <select
              name="program_id"
              value={formData.program_id}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="">전체 과정 상담</option>
              {programs.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.icon} {p.title}
                </option>
              ))}
            </select>
          </div>

          {/* 신청 유형 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              신청 유형
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "individual", label: "개인 수강" },
                { value: "group", label: "단체 교육" },
                { value: "corporate", label: "기관/기업" },
              ].map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      inquiry_type: type.value as typeof formData.inquiry_type,
                    })
                  }
                  className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                    formData.inquiry_type === type.value
                      ? "bg-teal-600 text-white border-teal-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-teal-400"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* 이름 & 이메일 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="홍길동"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="example@email.com"
              />
            </div>
          </div>

          {/* 전화 & 소속 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                전화번호
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="010-1234-5678"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                소속 기관
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="기관/학교/단체명"
              />
            </div>
          </div>

          {/* 문의 내용 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              문의 내용
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none"
              placeholder="궁금한 점이나 요청 사항을 적어주세요"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-teal-600 hover:bg-teal-700 py-6 text-lg"
          >
            {isSubmitting ? "신청 중..." : "수강 신청하기"}
          </Button>

          <p className="text-sm text-gray-500 text-center">
            신청 후 1~2 영업일 내에 안내 연락을 드립니다.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
