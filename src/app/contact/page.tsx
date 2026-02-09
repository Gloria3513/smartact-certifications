import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, FileText, Users } from "lucide-react";

const contactTypes = [
  {
    icon: FileText,
    title: "과정 상담",
    description: "자격증 과정에 대해 궁금한 점을 상담해 드립니다.",
    email: "smatact@gmail.com",
  },
  {
    icon: Users,
    title: "단체 교육 문의",
    description: "기관, 단체 교육에 대해 문의해 주세요.",
    email: "smatact@gmail.com",
  },
  {
    icon: Mail,
    title: "자격증 과정 개설 문의",
    description: "새로운 자격증 과정 제안 및 협력 문의.",
    email: "smatact@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            신청·문의
          </h1>
          <p className="text-xl text-teal-100">
            궁금한 점이 있으시면 언제든 연락해 주세요
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <CardTitle>{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <a
                      href={`mailto:${type.email}`}
                      className="text-teal-600 hover:text-teal-700 font-medium"
                    >
                      {type.email}
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            직접 문의하기
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <a
                  href="mailto:smatact@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">이메일</p>
                    <p className="text-gray-600">smatact@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:010-4782-3513"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">전화</p>
                    <p className="text-gray-600">010-4782-3513</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            상담 가능 시간
          </h2>
          <p className="text-gray-600">
            평일 09:00 - 18:00 (주말 및 공휴일 제외)
            <br />
            이메일은 24시간 접수 가능합니다.
          </p>
        </div>
      </section>
    </div>
  );
}
