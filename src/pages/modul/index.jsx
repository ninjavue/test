import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import CardTable from '../../components/card';

const Module = () => {
    const params = useParams();
    const moduleId = params.id;
    const [searchParams] = useSearchParams();
    const [section, setSection] = useState(searchParams.get('section') || 'speed');

    useEffect(() => {
        if(moduleId === '2'){
            setSection('grant-permissions');
        } else if (moduleId === '3') {
            setSection('general-report');
        }

    }, [moduleId]);
    

    // Module 1: Tizimga kirish tezligi
    const accessSpeedData = [
      { id: 1, method: 'Birinchi usul', speed: '1.1 sekund' },
      { id: 2, method: 'RBAC', speed: '1.4 sekund' },
      { id: 3, method: 'ABAC', speed: '1.3 sekund' },
      { id: 4, method: 'DAC', speed: '1.8 sekund' },
      { id: 5, method: 'MAC', speed: '2 sekund' }
    ];

    // Module 1: Cheklash sabablari va cheklangan kategoriya
    const restrictionsData = [
      { 
        id: 1, 
        method: 'Birinchi usul', 
        totalUsers: 310, 
        restricted: 21,
        categories: [
          { reason: 'a', count: 7 },
          { reason: 'b', count: 3 },
          { reason: 'c', count: 6 },
          { reason: 'd', count: 5 }
        ]
      },
      { 
        id: 2, 
        method: 'RBAC', 
        totalUsers: 310, 
        restricted: 15,
        categories: [
          { reason: 'a', count: null },
          { reason: 'b', count: 4 },
          { reason: 'c', count: null },
          { reason: 'd', count: 5 }
        ]
      },
      { 
        id: 3, 
        method: 'ABAC', 
        totalUsers: 310, 
        restricted: 10,
        categories: [
          { reason: 'a', count: null },
          { reason: 'b', count: 6 },
          { reason: 'c', count: null },
          { reason: 'd', count: 4 }
        ]
      },
      { 
        id: 4, 
        method: 'DAC', 
        totalUsers: 310, 
        restricted: 25,
        categories: [
          { reason: 'a', count: 8 },
          { reason: 'b', count: 6 },
          { reason: 'c', count: null },
          { reason: 'd', count: 11 }
        ]
      },
      { 
        id: 5, 
        method: 'MAC', 
        totalUsers: 310, 
        restricted: 32,
        categories: [
          { reason: 'a', count: 11 },
          { reason: 'b', count: null },
          { reason: 'c', count: 13 },
          { reason: 'd', count: 8 }
        ]
      }
    ];

    // Module 1: Cheklangan foydalanuvchilar
    const restrictedUsersData = [
      { id: 1, category: 'Vaqtinchalik bloklangan', users: '23 ta foydalanuvchi' },
      { id: 2, category: 'Doimiy bloklangan', users: '12 ta foydalanuvchi' },
      { id: 3, category: 'Kutilayotgan tasdiqlash', users: '8 ta foydalanuvchi' },
      { id: 4, category: 'Muddati o\'tgan ruxsatlar', users: '15 ta foydalanuvchi' }
    ];

    // Module 2: Huquqlarni berish
    const grantPermissionsData = [
      { 
        id: 1, 
        method: 'Birinchi usul',
        permissions: [
          { type: 'Administrator huquqi', reason: 'Tizimni boshqarish va nazorat qilish', count: 0 },
          { type: "Ma'lumotlarni o'zgartirish huquqi", reason: 'Yangi funksiyalarni kiritish va yangilash', count: 3 },
          { type: 'Hisobot yaratish huquqi', reason: 'Tahlil qilish va hisobotlar yaratish', count: 5 },
          { type: 'Kirish huquqi (cheklangan)', reason: "Maxfiy ma'lumotlarga kirishini talab qilish", count: 0 },
          { type: 'Administrator huquqi', reason: 'Tizimni boshqarish va nazorat qilish', count: 1 }
        ]
      },
      { 
        id: 2, 
        method: 'RBAC',
        permissions: [
          { type: "Ma'lumotlarni o'zgartirish huquqi", reason: 'Yangi funksiyalarni kiritish va yangilash', count: 8 },
          { type: 'Hisobot yaratish huquqi', reason: 'Tahlil qilish va hisobotlar yaratish', count: 7 },
          { type: 'Kirish huquqi (cheklangan)', reason: "Maxfiy ma'lumotlarga kirishini talab qilish", count: 0 },
          { type: 'Administrator huquqi', reason: 'Tizimni boshqarish va nazorat qilish', count: 0 }
        ]
      },
      { 
        id: 3, 
        method: 'ABAC',
        permissions: [
          { type: "Ma'lumotlarni o'zgartirish huquqi", reason: 'Yangi funksiyalarni kiritish va yangilash', count: 9 },
          { type: 'Hisobot yaratish huquqi', reason: 'Tahlil qilish va hisobotlar yaratish', count: 11 },
          { type: 'Kirish huquqi (cheklangan)', reason: "Maxfiy ma'lumotlarga kirishini talab qilish", count: 1 }
        ]
      },
      { 
        id: 4, 
        method: 'DAC',
        permissions: [
          { type: 'Administrator huquqi', reason: 'Tizimni boshqarish va nazorat qilish', count: 2 },
          { type: "Ma'lumotlarni o'zgartirish huquqi", reason: 'Yangi funksiyalarni kiritish va yangilash', count: 16 },
          { type: 'Hisobot yaratish huquqi', reason: 'Tahlil qilish va hisobotlar yaratish', count: 8 },
          { type: 'Kirish huquqi (cheklangan)', reason: "Maxfiy ma'lumotlarga kirishini talab qilish", count: 3 }
        ]
      },
      { 
        id: 5, 
        method: 'MAC',
        permissions: [
          { type: 'Administrator huquqi', reason: 'Tizimni boshqarish va nazorat qilish', count: 2 },
          { type: "Ma'lumotlarni o'zgartirish huquqi", reason: 'Yangi funksiyalarni kiritish va yangilash', count: 13 },
          { type: 'Hisobot yaratish huquqi', reason: 'Tahlil qilish va hisobotlar yaratish', count: 10 },
          { type: 'Kirish huquqi (cheklangan)', reason: "Maxfiy ma'lumotlarga kirishini talab qilish", count: 3 }
        ]
      }
    ];

    // Module 3: Umumiy hisobot
    const generalReportData = [
      { id: 1, action: 'Tizimga kirish', count: '1,234', percentage: '45%' },
      { id: 2, action: 'Ma\'lumot tahrirlash', count: '876', percentage: '32%' },
      { id: 3, action: 'Fayllarni yuklash', count: '432', percentage: '16%' },
      { id: 4, action: 'Sozlamalarni o\'zgartirish', count: '189', percentage: '7%' }
    ];

    // Module 3: Tizimga ta'siri
    const systemImpactData = [
      { id: 1, metric: 'Server yuklamasi', value: '68%', status: 'Normal' },
      { id: 2, metric: 'Ma\'lumotlar bazasi so\'rovlari', value: '2,345/daqiqa', status: 'Yuqori' },
      { id: 3, metric: 'Xatoliklar soni', value: '12', status: 'Past' },
      { id: 4, metric: 'Javob berish tezligi', value: '0.8s', status: 'Yaxshi' }
    ];

    const renderContent = () => {
      if (moduleId === '1') {
        if (section === 'speed') {
          return (
            <CardTable
              title="Foydalanuvchilarning tizimga kirish tezligi"
              headers={['№', 'Usul nomi', 'Foydalanuvchining tizimga kirish tezligi']}
              data={accessSpeedData}
              renderRow={(item) => (
                <>
                  <td className="py-4 px-4 text-gray-900 dark:text-gray-200 font-medium">{item.id}</td>
                  <td className="py-4 px-4 text-gray-900 dark:text-gray-200">{item.method}</td>
                  <td className="py-4 px-4 text-gray-900 dark:text-gray-200">{item.speed}</td>
                </>
              )}
            />
          );
        } else if (section === 'restrictions') {
          return (
            <div className="bg-white dark:bg-[#111c2d] rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  Foydalanishni cheklash sabablari va foydalanishi cheklangan ya'ni ruxsat etilmagan foydalanuvchilar kategoriyasi
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600">T/r</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600">Usul nomi</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600">Jami foydalanuvchilar</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600">Foydalanishi cheklanganlar soni</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600">Ruxsat berilmaganlik sababi</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600">Kategoriya kesimida</th>
                    </tr>
                  </thead>
                  <tbody>
                    {restrictionsData.map((item) => (
                      item.categories.map((cat, catIndex) => (
                        <tr key={`${item.id}-${catIndex}`} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          {catIndex === 0 && (
                            <>
                              <td rowSpan={4} className="text-center py-3 px-4 text-gray-900 dark:text-gray-200 font-medium border border-gray-300 dark:border-gray-600">{item.id}</td>
                              <td rowSpan={4} className="text-center py-3 px-4 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600">{item.method}</td>
                              <td rowSpan={4} className="text-center py-3 px-4 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600">{item.totalUsers}</td>
                              <td rowSpan={4} className="text-center py-3 px-4 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600">{item.restricted}</td>
                            </>
                          )}
                          <td className="text-center py-3 px-4 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600">{cat.reason}</td>
                          <td className="text-center py-3 px-4 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600">{cat.count !== null ? cat.count : '-'}</td>
                        </tr>
                      ))
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        } else if (section === 'restricted-users') {
          return (
            <CardTable
              title="Foydalanishi cheklangan foydalanuvchilar kategoriyasi"
              headers={['№', 'Kategoriya', 'Foydalanuvchilar soni']}
              data={restrictedUsersData}
              renderRow={(item) => (
                <>
                  <td className="py-4 px-4 text-gray-900 dark:text-gray-200 font-medium">{item.id}</td>
                  <td className="py-4 px-4 text-gray-900 dark:text-gray-200">{item.category}</td>
                  <td className="py-4 px-4 text-gray-900 dark:text-gray-200">{item.users}</td>
                </>
              )}
            />
          );
        }
      } else if (moduleId === '2') {
        if (section === 'grant-permissions') {
          return (
            <div className="bg-white dark:bg-[#111c2d] rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  Foydalanuvchilarga qo'shimcha foydalanish huquqlarini berishi va qo'shimcha foydalanish huquqlari bo'yicha kategoriyalash natijalari
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600">T/r</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600">Usul nomi</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600">Qo'shimcha huquq turi</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600">Berilganlik sababi</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600">Qo'shimcha huquq berilgan foydalanuvchilar soni (ta)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grantPermissionsData.map((item) => (
                      item.permissions.map((perm, permIndex) => (
                        <tr key={`${item.id}-${permIndex}`} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          {permIndex === 0 && (
                            <>
                              <td rowSpan={item.permissions.length} className="text-center py-3 px-4 text-gray-900 dark:text-gray-200 font-medium border border-gray-300 dark:border-gray-600">{item.id}</td>
                              <td rowSpan={item.permissions.length} className="text-center py-3 px-4 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600">{item.method}</td>
                            </>
                          )}
                          <td className="text-left py-3 px-4 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600">{perm.type}</td>
                          <td className="text-left py-3 px-4 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600">{perm.reason}</td>
                          <td className="text-center py-3 px-4 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600">{perm.count}</td>
                        </tr>
                      ))
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }
      } else if (moduleId === '3') {
        if (section === 'general-report') {
          return (
            <CardTable
              title="Foydalanuvchi harakatlari bo'yicha umumiy hisobot"
              headers={['№', 'Harakat', 'Soni', 'Foiz']}
              data={generalReportData}
              renderRow={(item) => (
                <>
                  <td className="py-4 px-4 text-gray-900 dark:text-gray-200 font-medium">{item.id}</td>
                  <td className="py-4 px-4 text-gray-900 dark:text-gray-200">{item.action}</td>
                  <td className="py-4 px-4 text-gray-900 dark:text-gray-200">{item.count}</td>
                  <td className="py-4 px-4 text-gray-900 dark:text-gray-200">{item.percentage}</td>
                </>
              )}
            />
          );
        } else if (section === 'system-impact') {
          return (
            <CardTable
              title="Foydalanuvchi harakatlarining tizimga bo'lgan ta'siri"
              headers={['№', 'Metrika', 'Qiymat', 'Holat']}
              data={systemImpactData}
              renderRow={(item) => (
                <>
                  <td className="py-4 px-4 text-gray-900 dark:text-gray-200 font-medium">{item.id}</td>
                  <td className="py-4 px-4 text-gray-900 dark:text-gray-200">{item.metric}</td>
                  <td className="py-4 px-4 text-gray-900 dark:text-gray-200">{item.value}</td>
                  <td className="py-4 px-4 text-gray-900 dark:text-gray-200">{item.status}</td>
                </>
              )}
            />
          );
        }
      }
      
      return <div className="text-gray-600 dark:text-gray-400">Bo'lim topilmadi</div>;
    };

  return (
    <div className="space-y-6">
      {renderContent()}
    </div>
  )
}

export default Module