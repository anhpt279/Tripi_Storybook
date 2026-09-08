import React from 'react';
import {
  Bell,
  CalendarDays,
  ChevronRight,
  Clock3,
  FileText,
  KeyRound,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Moon,
  Phone,
  Search,
  Shield,
  Smartphone,
  Sun,
  Users,
} from 'lucide-react';
import {
  Alert,
  Button,
  Card,
  List,
  ListItem,
  SearchInput,
  Typography,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/ui';

const quickLinks = [
  'Hướng dẫn sử dụng hệ thống',
  'Cổng thông tin ĐHQGHN',
  'Dịch vụ trực tuyến',
];

const forms = ['Đăng ký tên miền', 'Đề nghị dịch vụ KT'];

const Header = () => (
  <header className="sticky top-0 z-10 border-b border-slate-200 bg-white shadow-sm">
    <div className="mx-auto max-w-[1600px] px-4">
      <div className="flex min-h-20 items-center justify-between gap-6 border-b border-slate-100 py-3">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#2e3192] text-white shadow-sm">
              <Shield className="h-8 w-8" strokeWidth={1.6} />
            </div>
            <div className="leading-tight">
              <Typography
                variant="body"
                className="text-lg font-extrabold uppercase tracking-tight text-[#2e3192]"
              >
                VNU IT Services
              </Typography>
              <Typography
                variant="body"
                className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500"
              >
                Cổng Dịch vụ CNTT - ĐHQGHN
              </Typography>
            </div>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 sm:block" />
          <div className="hidden items-center gap-2 text-[#2e3192] sm:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#2e3192] font-black">
              VNU
            </div>
            <Typography
              as="span"
              variant="body"
              className="max-w-48 text-xs font-bold uppercase leading-tight"
            >
              Đại học Quốc gia Hà Nội
            </Typography>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="hidden xl:block">
            <SearchInput aria-label="Tìm kiếm" placeholder="Tìm kiếm..." />
            <kbd className="ml-auto rounded border bg-slate-50 px-1.5 py-0.5 text-[10px]">
              ⌘ K
            </kbd>
          </div>
          <Button
            aria-label="Tìm kiếm"
            tooltip="Tìm kiếm"
            size="withicon"
            variant="outline"
            className="xl:hidden"
          >
            <Search />
          </Button>
          <Button
            aria-label="Chế độ sáng"
            tooltip="Chế độ sáng"
            size="withicon"
            variant="ghost"
          >
            <Sun />
          </Button>
          <Button
            aria-label="Mở menu"
            tooltip="Mở menu"
            size="withicon"
            variant="ghost"
            className="lg:hidden"
          >
            <Menu />
          </Button>
        </div>
      </div>
      <div className="flex h-14 items-center justify-center gap-6 border-b border-slate-100">
        <Tabs defaultValue="home" className="hidden lg:block">
          <TabsList variant="navigation" className="mx-auto w-fit">
            <TabsTrigger variant="navigation" value="home">
              Trang chủ
            </TabsTrigger>
            <TabsTrigger variant="navigation" value="services">
              Dịch vụ CNTT
            </TabsTrigger>
            <TabsTrigger variant="navigation" value="guides">
              Hướng dẫn
            </TabsTrigger>
            <TabsTrigger variant="navigation" value="forms">
              Biểu mẫu
            </TabsTrigger>
            <TabsTrigger variant="navigation" value="contact">
              Liên hệ
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  </header>
);

const Panel = ({
  title,
  icon: Icon,
  tone,
  children,
}: {
  title: string;
  icon: React.ElementType;
  tone: 'green' | 'red' | 'blue';
  children: React.ReactNode;
}) => {
  const tones = {
    green: 'bg-emerald-50 text-emerald-700',
    red: 'bg-rose-50 text-rose-600',
    blue: 'bg-blue-50 text-blue-700',
  };
  return (
    <Card variant="panel" padding="none">
      <div
        className={`flex items-center gap-2 border-b border-slate-200 p-3 ${tones[tone]}`}
      >
        <Icon className="h-5 w-5" />
        <Typography
          as="h2"
          variant="h3"
          className="text-base font-bold text-slate-800"
        >
          {title}
        </Typography>
      </div>
      <div className="mt-4 space-y-4">{children}</div>
    </Card>
  );
};

const ContactCard = ({
  title,
  children,
  tone,
}: {
  title: string;
  children: React.ReactNode;
  tone: 'blue' | 'green';
}) => (
  <div
    className={`rounded-lg border border-l-4 border-slate-200 bg-white p-4 shadow-sm ${tone === 'blue' ? 'border-l-blue-500' : 'border-l-emerald-500'}`}
  >
    <Typography
      as="h4"
      variant="h3"
      className={`mb-2 font-bold ${tone === 'blue' ? 'text-blue-700' : 'text-emerald-700'}`}
    >
      <MapPin className="mr-1 inline h-4 w-4" />
      {title}
    </Typography>
    <Typography
      variant="body"
      className="text-sm leading-relaxed text-slate-600"
    >
      {children}
    </Typography>
    <a
      className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-blue-700"
      href="tel:02485875910"
    >
      <Phone className="h-3.5 w-3.5" />
      024.85875910
    </a>
  </div>
);

export const VNUITServices: React.FC = () => (
  <div className="min-h-screen bg-slate-50 font-sans text-slate-700">
    <Header />
    <main>
      <div className="mx-auto max-w-[1600px] px-4 py-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <aside className="space-y-6 lg:col-span-2">
            <Panel title="NGƯỜI HỌC" icon={Users} tone="green">
              <div className="px-2">
                <Typography
                  variant="body"
                  className="mb-2 text-sm font-semibold text-slate-700"
                >
                  Tải App OneVNU
                </Typography>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-auto flex-1 border-slate-300 px-1 py-2 text-xs font-medium"
                  >
                    <Smartphone className="h-4 w-4 text-emerald-600" />
                    Android
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-auto flex-1 border-slate-300 px-1 py-2 text-xs font-medium"
                  >
                    <Smartphone className="h-4 w-4" />
                    iOS
                  </Button>
                </div>
              </div>
              <div className="space-y-1">
                <Typography
                  variant="muted"
                  className="px-1 text-xs font-semibold uppercase text-slate-400"
                >
                  Liên kết nhanh
                </Typography>
                {quickLinks.map((link) => (
                  <div
                    key={link}
                    className="flex items-center gap-1 rounded-md p-2 text-sm text-slate-600"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-emerald-600" />
                    {link}
                  </div>
                ))}
              </div>
            </Panel>
            <Panel title="THÔNG BÁO" icon={Bell} tone="red">
              <div className="space-y-1 px-2 pb-4">
                <Alert variant="destructive" showIcon>
                  Chưa có thông báo mới
                </Alert>
              </div>
            </Panel>
          </aside>

          <div className="space-y-8 lg:col-span-8">
            <Card variant="info" padding="default">
              <Typography
                as="h2"
                variant="h2"
                className="mb-4 flex items-center gap-2 text-xl font-bold text-blue-800"
              >
                <Monitor className="h-6 w-6" />
                Giới thiệu &amp; Thời gian hỗ trợ
              </Typography>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Typography
                    as="h3"
                    variant="h3"
                    className="mb-2 flex items-center gap-2 font-semibold text-slate-800"
                  >
                    <Shield className="h-4 w-4 text-blue-600" />
                    Dịch vụ cung cấp:
                  </Typography>
                  <List
                    variant="disc"
                    spacing="default"
                    className="pl-5 text-sm text-slate-600"
                  >
                    <ListItem>
                      <b>Hỗ trợ tài khoản:</b> Email VNU, Tài khoản IDP, Office
                      365.
                    </ListItem>
                    <ListItem>
                      <b>Hỗ trợ kết nối:</b> Mạng nội bộ (VNUnet).
                    </ListItem>
                    <ListItem>
                      <b>Hỗ trợ phần mềm:</b> Phần mềm nội bộ cho cán bộ, dịch
                      vụ chung của ĐHQGHN.
                    </ListItem>
                    <ListItem>
                      Tư vấn và giải đáp các thắc mắc về CNTT trong ĐHQGHN.
                    </ListItem>
                  </List>
                </div>
                <div>
                  <Typography
                    as="h3"
                    variant="h3"
                    className="mb-2 flex items-center gap-2 font-semibold text-slate-800"
                  >
                    <Clock3 className="h-4 w-4 text-orange-500" />
                    Lưu ý &amp; Thời gian làm việc:
                  </Typography>
                  <List
                    variant="disc"
                    spacing="default"
                    className="pl-5 text-sm text-slate-600"
                  >
                    <ListItem>
                      <b className="text-rose-600">Phạm vi hỗ trợ:</b> Chỉ hỗ
                      trợ các dịch vụ dùng chung cấp ĐHQGHN.
                    </ListItem>
                    <ListItem>
                      <b>Thời gian làm việc:</b> Thứ 2 - Thứ 6.
                    </ListItem>
                    <ListItem>
                      Sáng: 8h30 - 12h00 | Chiều: 13h30 - 16h30
                    </ListItem>
                    <ListItem>
                      Nghỉ Thứ 7, Chủ nhật và các ngày Lễ, Tết.
                    </ListItem>
                  </List>
                </div>
              </div>
            </Card>
            <Card variant="notice" padding="default">
              <Typography
                as="h3"
                variant="h3"
                className="mb-3 flex items-center gap-2 text-xl font-semibold text-blue-800"
              >
                <Bell className="h-6 w-6" />
                Phân biệt 2 Hệ thống quan trọng
              </Typography>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-blue-100 bg-white p-4">
                  <b className="text-blue-700">Hệ thống dành cho người học</b>
                  <Typography
                    variant="body"
                    className="mt-1 text-sm text-slate-600"
                  >
                    Tra cứu và sử dụng các dịch vụ dành cho sinh viên, học viên
                    và nghiên cứu sinh.
                  </Typography>
                </div>
                <div className="rounded-lg border border-blue-100 bg-white p-4">
                  <b className="text-blue-700">Hệ thống dành cho cán bộ</b>
                  <Typography
                    variant="body"
                    className="mt-1 text-sm text-slate-600"
                  >
                    Đăng nhập IDP và sử dụng các dịch vụ chung của ĐHQGHN.
                  </Typography>
                </div>
              </div>
            </Card>
            <Card variant="section" padding="default">
              <Tabs defaultValue="student">
                <TabsList className="mb-8 grid h-auto w-full grid-cols-2 rounded-xl">
                  <TabsTrigger
                    value="student"
                    className="py-3 text-lg font-semibold text-emerald-700"
                  >
                    Người học (SV/HV/NCS)
                  </TabsTrigger>
                  <TabsTrigger
                    value="staff"
                    className="py-3 text-lg font-semibold"
                  >
                    Cán bộ / Giảng viên
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="student">
                  <div className="space-y-5">
                    <Typography
                      as="h2"
                      variant="h2"
                      className="flex items-center gap-3 border-b border-slate-200 pb-3 text-2xl font-bold text-slate-800"
                    >
                      <Monitor className="h-7 w-7" />
                      Dành cho Đơn vị
                    </Typography>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border border-emerald-100 bg-emerald-50/50 p-4">
                        <b className="text-emerald-700">VNUnet</b>
                        <Typography
                          variant="body"
                          className="mt-1 text-sm text-slate-600"
                        >
                          Kết nối mạng và hỗ trợ kỹ thuật trong hệ thống ĐHQGHN.
                        </Typography>
                      </div>
                      <div className="rounded-lg border border-blue-100 bg-blue-50/50 p-4">
                        <b className="text-blue-700">Dịch vụ phần mềm</b>
                        <Typography
                          variant="body"
                          className="mt-1 text-sm text-slate-600"
                        >
                          Các phần mềm và dịch vụ dùng chung cho đơn vị.
                        </Typography>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="staff">
                  <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
                    Các dịch vụ dành cho cán bộ và giảng viên ĐHQGHN.
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
            <Card
              variant="plain"
              padding="none"
              className="space-y-4 border-t-2 border-slate-200 px-6 py-8"
            >
              <Typography
                as="h2"
                variant="h2"
                className="flex items-center gap-3 border-b border-slate-200 pb-3 text-2xl font-bold text-slate-800"
              >
                <Users className="h-7 w-7 text-blue-600" />
                Liên hệ Bộ phận Kỹ thuật
              </Typography>
              <Typography variant="body" className="text-sm text-slate-500">
                Phòng Quản trị Kỹ thuật - Trung tâm Quản trị Đại học số (DUAC)
              </Typography>
              <div className="grid gap-4 md:grid-cols-2">
                <ContactCard title="Khu vực Xuân Thủy" tone="blue">
                  Phòng Quản trị Kỹ thuật 205
                  <br />
                  Tòa nhà Hội nghị và Đổi mới sáng tạo (D2)
                  <br />
                  144 Xuân Thủy, Cầu Giấy, Hà Nội
                </ContactCard>
                <ContactCard title="Khu vực Hòa Lạc" tone="green">
                  Phòng Quản trị Kỹ thuật - Khu C Nhà điều hành
                  <br />
                  Khu đô thị ĐHQGHN
                  <br />
                  Hòa Lạc, Hà Nội
                </ContactCard>
              </div>
              <Typography
                variant="body"
                className="text-center text-sm text-slate-500"
              >
                Email:{' '}
                <Typography
                  as="span"
                  variant="body"
                  className="font-medium text-blue-700"
                >
                  vnunet@vnu.edu.vn
                </Typography>
              </Typography>
            </Card>
          </div>

          <aside className="space-y-6 lg:col-span-2">
            <Panel title="CÁN BỘ" icon={Shield} tone="blue">
              <div className="mx-2">
                <Button className="w-full bg-blue-600 py-6 text-sm font-bold hover:bg-blue-700">
                  <KeyRound />
                  Đăng nhập IDP
                </Button>
              </div>
              <div className="space-y-1">
                <Typography
                  variant="muted"
                  className="px-1 text-xs font-semibold uppercase text-slate-400"
                >
                  Liên kết nhanh
                </Typography>
                {quickLinks.slice(0, 2).map((link) => (
                  <div
                    key={link}
                    className="flex items-center gap-1 rounded-md p-2 text-sm text-slate-600"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-blue-600" />
                    {link}
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-200 pt-3">
                <Typography
                  variant="muted"
                  className="mb-2 px-1 text-xs font-semibold uppercase text-slate-400"
                >
                  Biểu mẫu
                </Typography>
                {forms.map((form) => (
                  <div
                    key={form}
                    className="flex items-center gap-2 rounded-lg p-2 text-sm text-slate-700"
                  >
                    <FileText className="h-4 w-4 text-blue-600" />
                    {form}
                  </div>
                ))}
              </div>
            </Panel>
          </aside>
        </div>
      </div>
      <Card
        variant="plain"
        padding="none"
        className="mt-8 border-t border-slate-200 bg-white py-12"
      >
        <div className="mx-auto max-w-[1600px] px-4">
          <Typography
            as="h2"
            variant="h2"
            className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900"
          >
            <Bell className="h-6 w-6 text-rose-500" />
            Thông báo mới nhất
          </Typography>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 p-5 text-sm text-slate-400">
              Chưa có dữ liệu thông báo
            </div>
            <div className="rounded-lg border border-slate-200 p-5 text-sm text-slate-400">
              Chưa có dữ liệu thông báo
            </div>
            <div className="rounded-lg border border-slate-200 p-5 text-sm text-slate-400">
              Chưa có dữ liệu thông báo
            </div>
          </div>
        </div>
      </Card>
    </main>
    <footer className="bg-[#2e3192] text-white">
      <div className="mx-auto grid max-w-[1600px] gap-8 px-4 py-8 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#2e3192]">
              <Shield className="h-7 w-7" />
            </div>
            <div>
              <Typography
                variant="body"
                className="text-xl font-extrabold uppercase"
              >
                VNU IT Services
              </Typography>
              <Typography
                variant="body"
                className="text-[10px] font-bold uppercase tracking-wider text-white/80"
              >
                Cổng Dịch vụ CNTT - ĐHQGHN
              </Typography>
            </div>
          </div>
          <Typography variant="body" className="text-sm text-white/70">
            © 2026 VNU IT Services. All rights reserved.
          </Typography>
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/15 pt-3 text-xs text-white/80">
            <Typography as="span" variant="body">
              <Users className="mr-1 inline h-3.5 w-3.5 text-emerald-300" />
              Online: 0
            </Typography>
            <Typography as="span" variant="body">
              <CalendarDays className="mr-1 inline h-3.5 w-3.5 text-blue-300" />
              Hôm nay: 0
            </Typography>
            <Typography as="span" variant="body">
              <Clock3 className="mr-1 inline h-3.5 w-3.5 text-orange-300" />
              Hôm qua: 0
            </Typography>
            <Typography as="span" variant="body">
              <Moon className="mr-1 inline h-3.5 w-3.5 text-purple-300" />
              Tổng cộng: 0
            </Typography>
          </div>
        </div>
        <div>
          <Typography as="h4" variant="h3" className="mb-3 font-bold">
            Trung tâm Quản trị Đại học số
          </Typography>
          <Typography
            variant="body"
            className="text-sm leading-relaxed text-white/70"
          >
            Trung tâm sẽ đảm nhận chức năng, nhiệm vụ đầu mối tham mưu, triển
            khai các hoạt động về xây dựng đại học số.
          </Typography>
          <div className="mt-4 flex gap-4 text-xs text-white/80">
            <Typography as="span" variant="body">
              <ChevronRight className="inline h-3 w-3" />
              Sản phẩm
            </Typography>
            <Typography as="span" variant="body">
              <ChevronRight className="inline h-3 w-3" />
              Dịch vụ
            </Typography>
            <Typography as="span" variant="body">
              <ChevronRight className="inline h-3 w-3" />
              Tuyển dụng
            </Typography>
          </div>
        </div>
        <div>
          <Typography as="h4" variant="h3" className="mb-3 font-bold">
            Liên hệ Bộ phận Kỹ thuật
          </Typography>
          <div className="space-y-3 text-sm text-white/75">
            <Typography variant="body">
              <MapPin className="mr-2 inline h-4 w-4 text-blue-300" />
              Khu vực Xuân Thủy: Phòng Quản trị Kỹ thuật 205, D2, 144 Xuân Thủy,
              Hà Nội
            </Typography>
            <Typography variant="body">
              <MapPin className="mr-2 inline h-4 w-4 text-emerald-300" />
              Khu vực Hòa Lạc: Khu C Nhà điều hành, Khu đô thị ĐHQGHN
            </Typography>
            <Typography
              variant="body"
              className="border-t border-white/15 pt-3"
            >
              <Phone className="mr-1 inline h-3.5 w-3.5" />
              024.85875910 <Mail className="ml-3 mr-1 inline h-3.5 w-3.5" />
              vnunet@vnu.edu.vn
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  </div>
);
