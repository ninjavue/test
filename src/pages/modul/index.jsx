import React, { use, useEffect, useState, useRef } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import CardTable from '../../components/card';
import Modal from '../../components/modal';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import toast from 'react-hot-toast';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiDownload, FiPlus } from 'react-icons/fi';

const Module = () => {
    const params = useParams();
    const moduleId = params.id;
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const section = searchParams.get('section') || 'speed'; // default section

    // Modal states
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState('');

    // Dropdown states
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const dropdownRef = useRef(null);
    const dropdownRef2 = useRef(null);

    // Data states
    const [speedData, setSpeedData] = useState([
      { id: 1, method: 'Birinchi usul', speed: '1.1 sekund' },
      { id: 2, method: 'RBAC', speed: '1.4 sekund' },
      { id: 3, method: 'ABAC', speed: '1.3 sekund' },
      { id: 4, method: 'DAC', speed: '1.8 sekund' },
      { id: 5, method: 'MAC', speed: '2 sekund' }
    ]);

    const [restrictedUsersData, setRestrictedUsersData] = useState([
      { id: 1, category: 'Vaqtinchalik bloklangan', users: '23 ta foydalanuvchi' },
      { id: 2, category: 'Doimiy bloklangan', users: '12 ta foydalanuvchi' },
      { id: 3, category: 'Kutilayotgan tasdiqlash', users: '8 ta foydalanuvchi' },
      { id: 4, category: 'Muddati o\'tgan ruxsatlar', users: '15 ta foydalanuvchi' }
    ]);

    const [generalReportData, setGeneralReportData] = useState([
      { id: 1, action: 'Tizimga kirish', count: '1,234', percentage: '45%' },
      { id: 2, action: 'Ma\'lumot tahrirlash', count: '876', percentage: '32%' },
      { id: 3, action: 'Fayllarni yuklash', count: '432', percentage: '16%' },
      { id: 4, action: 'Sozlamalarni o\'zgartirish', count: '189', percentage: '7%' }
    ]);

    const [systemImpactData, setSystemImpactData] = useState([
      { id: 1, metric: 'Server yuklamasi', value: '68%', status: 'Normal' },
      { id: 2, metric: 'Ma\'lumotlar bazasi so\'rovlari', value: '2,345/daqiqa', status: 'Yuqori' },
      { id: 3, metric: 'Xatoliklar soni', value: '12', status: 'Past' },
      { id: 4, metric: 'Javob berish tezligi', value: '0.8s', status: 'Yaxshi' }
    ]);

    const [grantPermissionsData, setGrantPermissionsData] = useState([
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
    ]);

    const [restrictionsData, setRestrictionsData] = useState([
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
    ]);

    useEffect(() => {
        if(moduleId == 2){
            navigate(`/modules/${moduleId}?section=grant-permissions`);
        }else if(moduleId == 3){
            navigate(`/modules/${moduleId}?section=general-report`);
        }

    }, [moduleId]);

    // Dropdown outside click handler
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsDropdownOpen(false);
        }
        if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
          setIsDropdownOpen2(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // PDF Export funksiyasi
    const exportToPDF = (title, headers, data) => {
      const doc = new jsPDF();
      
      // Add title
      doc.setFontSize(16);
      doc.text(title, 14, 20);
      
      // Add table - jspdf-autotable extends jsPDF with autoTable method
      doc.autoTable({
        head: [headers],
        body: data,
        startY: 30,
        styles: { 
          font: 'helvetica',
          fontSize: 10,
        },
        headStyles: {
          fillColor: [59, 130, 246],
          textColor: 255,
          fontSize: 11,
          fontStyle: 'bold'
        },
        alternateRowStyles: {
          fillColor: [245, 247, 250]
        }
      });
      
      doc.save(`${title}.pdf`);
      toast.success('PDF yuklab olindi!');
    };

    // Modal handlers
    const handleOpenModal = (type) => {
      setModalType(type);
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
      setModalType('');
    };

    const handleAddData = (newData) => {
      if (modalType === 'speed') {
        setSpeedData([...speedData, { id: speedData.length + 1, ...newData }]);
      } else if (modalType === 'restricted-users') {
        setRestrictedUsersData([...restrictedUsersData, { id: restrictedUsersData.length + 1, ...newData }]);
      } else if (modalType === 'general-report') {
        setGeneralReportData([...generalReportData, { id: generalReportData.length + 1, ...newData }]);
      } else if (modalType === 'system-impact') {
        setSystemImpactData([...systemImpactData, { id: systemImpactData.length + 1, ...newData }]);
      } else if (modalType === 'grant-permissions' || modalType === 'grant-permission') {
        // Grant permissions uchun yangi usul qo'shish
        const newPermission = {
          id: grantPermissionsData.length + 1,
          method: newData.method,
          permissions: [
            {
              type: newData.permissionType,
              reason: newData.reason,
              count: parseInt(newData.count) || 0
            }
          ]
        };
        setGrantPermissionsData([...grantPermissionsData, newPermission]);
      } else if (modalType === 'restrictions') {
        // Restrictions uchun yangi usul qo'shish
        const newRestriction = {
          id: restrictionsData.length + 1,
          method: newData.method,
          totalUsers: parseInt(newData.totalUsers) || 0,
          restricted: parseInt(newData.restricted) || 0,
          categories: [
            { reason: 'a', count: newData.countA ? parseInt(newData.countA) : null },
            { reason: 'b', count: newData.countB ? parseInt(newData.countB) : null },
            { reason: 'c', count: newData.countC ? parseInt(newData.countC) : null },
            { reason: 'd', count: newData.countD ? parseInt(newData.countD) : null }
          ]
        };
        setRestrictionsData([...restrictionsData, newRestriction]);
      }
      toast.success("Ma'lumot qo'shildi!");
      handleCloseModal();
    };
    

    // Module 1: Tizimga kirish tezligi
    const accessSpeedData = [
      { id: 1, method: 'Birinchi usul', speed: '1.1 sekund' },
      { id: 2, method: 'RBAC', speed: '1.4 sekund' },
      { id: 3, method: 'ABAC', speed: '1.3 sekund' },
      { id: 4, method: 'DAC', speed: '1.8 sekund' },
      { id: 5, method: 'MAC', speed: '2 sekund' }
    ];

    const renderContent = () => {
      if (moduleId === '1') {
        if (section === 'speed') {
          return (
            <>
              <CardTable
                title="Foydalanuvchilarning tizimga kirish tezligi"
                headers={['№', 'Usul nomi', 'Foydalanuvchining tizimga kirish tezligi']}
                data={speedData}
                renderRow={(item) => (
                  <>
                    <td className="py-4 px-4 text-gray-900 dark:text-gray-200 font-medium">{item.id}</td>
                    <td className="py-4 px-4 text-gray-900 dark:text-gray-200">{item.method}</td>
                    <td className="py-4 px-4 text-gray-900 dark:text-gray-200">{item.speed}</td>
                  </>
                )}
                onDownloadPDF={() => exportToPDF(
                  'Foydalanuvchilarning tizimga kirish tezligi',
                  ['№', 'Usul nomi', 'Tezlik'],
                  speedData.map(item => [item.id, item.method, item.speed])
                )}
                onAdd={() => handleOpenModal('speed')}
              />

              {/* Modal */}
              <Modal
                isOpen={isModalOpen && modalType === 'speed'}
                onClose={handleCloseModal}
                title="Yangi usul qo'shish"
              >
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  handleAddData({
                    method: formData.get('method'),
                    speed: formData.get('speed')
                  });
                }}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Usul nomi
                      </label>
                      <input
                        type="text"
                        name="method"
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        placeholder="Masalan: RBAC"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Kirish tezligi
                      </label>
                      <input
                        type="text"
                        name="speed"
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        placeholder="Masalan: 1.4 sekund"
                      />
                    </div>
                    <div className="flex justify-end gap-3 mt-6">
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        Bekor qilish
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Qo'shish
                      </button>
                    </div>
                  </div>
                </form>
              </Modal>
            </>
          );
        } else if (section === 'restrictions') {
          return (
            <div className="bg-white dark:bg-[#111c2d] rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  Foydalanishni cheklash sabablari va foydalanishi cheklangan ya'ni ruxsat etilmagan foydalanuvchilar kategoriyasi
                </h2>
                <div className="relative" ref={dropdownRef}>
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <BsThreeDotsVertical className="w-5 h-5" />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                      <button
                        onClick={() => {
                          // PDF export for restrictions table
                          const tableData = [];
                          restrictionsData.forEach(item => {
                            item.categories.forEach((cat, idx) => {
                              if (idx === 0) {
                                tableData.push([item.id, item.method, item.totalUsers, item.restricted, cat.reason, cat.count !== null ? cat.count : '-']);
                              } else {
                                tableData.push(['', '', '', '', cat.reason, cat.count !== null ? cat.count : '-']);
                              }
                            });
                          });
                          exportToPDF(
                            'Foydalanishni cheklash sabablari',
                            ['T/r', 'Usul', 'Jami', 'Cheklangan', 'Sabab', 'Kategoriya'],
                            tableData
                          );
                          setIsDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-t-lg"
                      >
                        <FiDownload className="w-4 h-4" />
                        Yuklab olish (PDF)
                      </button>
                      <button
                        onClick={() => {
                          handleOpenModal('restrictions');
                          setIsDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-b-lg"
                      >
                        <FiPlus className="w-4 h-4" />
                        Qo'shish
                      </button>
                    </div>
                  )}
                </div>
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
              onDownloadPDF={() => exportToPDF(
                'Cheklangan foydalanuvchilar kategoriyasi',
                ['№', 'Kategoriya', 'Foydalanuvchilar'],
                restrictedUsersData.map(item => [item.id, item.category, item.users])
              )}
              onAdd={() => handleOpenModal('restricted-users')}
            />
          );
        }
      } else if (moduleId === '2') {
        if (section === 'grant-permissions' || section === 'grant-permission') {
          return (
            <div className="bg-white dark:bg-[#111c2d] rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  Foydalanuvchilarga qo'shimcha foydalanish huquqlarini berishi va qo'shimcha foydalanish huquqlari bo'yicha kategoriyalash natijalari
                </h2>
                <div className="relative" ref={dropdownRef2}>
                  <button 
                    onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <BsThreeDotsVertical className="w-5 h-5" />
                  </button>
                  
                  {isDropdownOpen2 && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                      <button
                        onClick={() => {
                          const tableData = [];
                          grantPermissionsData.forEach(item => {
                            item.permissions.forEach((perm, idx) => {
                              if (idx === 0) {
                                tableData.push([item.id, item.method, perm.type, perm.reason, perm.count]);
                              } else {
                                tableData.push(['', '', perm.type, perm.reason, perm.count]);
                              }
                            });
                          });
                          exportToPDF(
                            'Qo\'shimcha huquqlar',
                            ['T/r', 'Usul', 'Huquq turi', 'Sabab', 'Soni'],
                            tableData
                          );
                          setIsDropdownOpen2(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-t-lg"
                      >
                        <FiDownload className="w-4 h-4" />
                        Yuklab olish (PDF)
                      </button>
                      <button
                        onClick={() => {
                          handleOpenModal('grant-permissions');
                          setIsDropdownOpen2(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-b-lg"
                      >
                        <FiPlus className="w-4 h-4" />
                        Qo'shish
                      </button>
                    </div>
                  )}
                </div>
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
              onDownloadPDF={() => exportToPDF(
                'Foydalanuvchi harakatlari umumiy hisoboti',
                ['№', 'Harakat', 'Soni', 'Foiz'],
                generalReportData.map(item => [item.id, item.action, item.count, item.percentage])
              )}
              onAdd={() => handleOpenModal('general-report')}
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
              onDownloadPDF={() => exportToPDF(
                'Tizimga ta\'siri hisoboti',
                ['№', 'Metrika', 'Qiymat', 'Holat'],
                systemImpactData.map(item => [item.id, item.metric, item.value, item.status])
              )}
              onAdd={() => handleOpenModal('system-impact')}
            />
          );
        }
      }
      
      return <div className="text-gray-600 dark:text-gray-400">Bo'lim topilmadi</div>;
    };

  return (
    <div className="space-y-6">
      {renderContent()}
      
      {/* Modals for different sections */}
      {/* Modal for Restrictions */}
      <Modal
        isOpen={isModalOpen && modalType === 'restrictions'}
        onClose={handleCloseModal}
        title="Yangi cheklash ma'lumotini qo'shish"
      >
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          handleAddData({
            method: formData.get('method'),
            totalUsers: formData.get('totalUsers'),
            restricted: formData.get('restricted'),
            countA: formData.get('countA'),
            countB: formData.get('countB'),
            countC: formData.get('countC'),
            countD: formData.get('countD')
          });
        }}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Usul nomi
              </label>
              <input
                type="text"
                name="method"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Masalan: RBAC"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Jami foydalanuvchilar
                </label>
                <input
                  type="number"
                  name="totalUsers"
                  required
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="310"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Cheklangan soni
                </label>
                <input
                  type="number"
                  name="restricted"
                  required
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="15"
                />
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Kategoriya kesimida (bo'sh qoldirish mumkin)
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                    Kategoriya A
                  </label>
                  <input
                    type="number"
                    name="countA"
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                    Kategoriya B
                  </label>
                  <input
                    type="number"
                    name="countB"
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                    Kategoriya C
                  </label>
                  <input
                    type="number"
                    name="countC"
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                    Kategoriya D
                  </label>
                  <input
                    type="number"
                    name="countD"
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Bekor qilish
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Qo'shish
              </button>
            </div>
          </div>
        </form>
      </Modal>

      {/* Modal for Restricted Users */}
      <Modal
        isOpen={isModalOpen && modalType === 'restricted-users'}
        onClose={handleCloseModal}
        title="Yangi kategoriya qo'shish"
      >
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          handleAddData({
            category: formData.get('category'),
            users: formData.get('users')
          });
        }}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Kategoriya
              </label>
              <input
                type="text"
                name="category"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Masalan: Vaqtinchalik bloklangan"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Foydalanuvchilar soni
              </label>
              <input
                type="text"
                name="users"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Masalan: 23 ta foydalanuvchi"
              />
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Bekor qilish
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Qo'shish
              </button>
            </div>
          </div>
        </form>
      </Modal>

      {/* Modal for General Report */}
      <Modal
        isOpen={isModalOpen && modalType === 'general-report'}
        onClose={handleCloseModal}
        title="Yangi harakat qo'shish"
      >
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          handleAddData({
            action: formData.get('action'),
            count: formData.get('count'),
            percentage: formData.get('percentage')
          });
        }}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Harakat
              </label>
              <input
                type="text"
                name="action"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Masalan: Tizimga kirish"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Soni
              </label>
              <input
                type="text"
                name="count"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Masalan: 1,234"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Foiz
              </label>
              <input
                type="text"
                name="percentage"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Masalan: 45%"
              />
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Bekor qilish
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Qo'shish
              </button>
            </div>
          </div>
        </form>
      </Modal>

      {/* Modal for Grant Permissions */}
      <Modal
        isOpen={isModalOpen && modalType === 'grant-permissions'}
        onClose={handleCloseModal}
        title="Yangi huquq berish ma'lumotini qo'shish"
      >
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          handleAddData({
            method: formData.get('method'),
            permissionType: formData.get('permissionType'),
            reason: formData.get('reason'),
            count: formData.get('count')
          });
        }}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Usul nomi
              </label>
              <input
                type="text"
                name="method"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Masalan: RBAC"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Qo'shimcha huquq turi
              </label>
              <select
                name="permissionType"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Tanlang...</option>
                <option value="Administrator huquqi">Administrator huquqi</option>
                <option value="Ma'lumotlarni o'zgartirish huquqi">Ma'lumotlarni o'zgartirish huquqi</option>
                <option value="Hisobot yaratish huquqi">Hisobot yaratish huquqi</option>
                <option value="Kirish huquqi (cheklangan)">Kirish huquqi (cheklangan)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Berilganlik sababi
              </label>
              <textarea
                name="reason"
                required
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Masalan: Tizimni boshqarish va nazorat qilish"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Qo'shimcha huquq berilgan foydalanuvchilar soni
              </label>
              <input
                type="number"
                name="count"
                required
                min="0"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Masalan: 5"
              />
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Bekor qilish
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Qo'shish
              </button>
            </div>
          </div>
        </form>
      </Modal>

      {/* Modal for System Impact */}
      <Modal
        isOpen={isModalOpen && modalType === 'system-impact'}
        onClose={handleCloseModal}
        title="Yangi metrika qo'shish"
      >
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          handleAddData({
            metric: formData.get('metric'),
            value: formData.get('value'),
            status: formData.get('status')
          });
        }}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Metrika
              </label>
              <input
                type="text"
                name="metric"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Masalan: Server yuklamasi"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Qiymat
              </label>
              <input
                type="text"
                name="value"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Masalan: 68%"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Holat
              </label>
              <input
                type="text"
                name="status"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Masalan: Normal"
              />
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Bekor qilish
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Qo'shish
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default Module