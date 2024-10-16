'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  PlusCircle,
  Package,
  FileText,
  Building2,
  UserMinus,
  Clock,
  UserPlus,
  UserCog,
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Users, label: 'Superadmin', href: '/superadmin' },
  { label: 'Subscription Management', href: '#', isHeader: true },
  { icon: Building2, label: 'All Hospitals', href: '/hospitals' },
  { icon: PlusCircle, label: 'Create New Hospital', href: '/hospitals/new' },
  { icon: Package, label: 'Packages', href: '/packages' },
  { icon: FileText, label: 'Add New Package', href: '/packages/new' },
  {
    icon: Clock,
    label: 'Subscription Requests',
    href: '/subscription-requests',
  },
  { label: 'Reports', href: '#', isHeader: true },
  {
    icon: Building2,
    label: 'Active Hospitals',
    href: '/reports/active-hospitals',
  },
  {
    icon: UserMinus,
    label: 'Inactive Hospitals',
    href: '/reports/inactive-hospitals',
  },
  { icon: Clock, label: 'Expired', href: '/reports/expired' },
  {
    icon: UserPlus,
    label: 'Registered Patient',
    href: '/reports/registered-patients',
  },
  {
    icon: UserCog,
    label: 'Registered Doctor',
    href: '/reports/registered-doctors',
  },
  {
    icon: FileText,
    label: 'Subscription Report',
    href: '/reports/subscription',
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <style jsx>{`
        .sidebar {
          width: 250px;
          background-color: #f7f7f7;
          height: 100vh;
          display: flex;
          flex-direction: column;
          padding: 20px;
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .sidebar-logo {
          font-size: 30px;
          font-weight: bold;
          color: #333;
          margin-right: 10px;
        }

        .sidebar-title {
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }

        .sidebar-user {
          margin-bottom: 20px;
        }

        .sidebar-user-details {
          display: flex;
          align-items: center;
        }

        .sidebar-user-avatar {
          width: 40px;
          height: 40px;
          background-color: #ccc;
          border-radius: 50%;
          margin-right: 10px;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
        }

        .sidebar-nav-header {
          font-size: 14px;
          font-weight: bold;
          text-transform: uppercase;
          color: #555;
          margin-top: 20px;
          margin-bottom: 10px;
        }

        .sidebar-nav-item {
          display: flex;
          align-items: center;
          padding: 10px 15px;
          font-size: 16px;
          font-weight: normal;
          color: #333;
          background-color: transparent;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .sidebar-nav-item:hover {
          background-color: #e0e0e0;
        }

        .sidebar-nav-item-active {
          background-color: #007bff;
          color: white;
        }

        .sidebar-nav-icon {
          margin-right: 10px;
          width: 16px;
          height: 16px;
        }
      `}</style>
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">H</div>
          <span className="sidebar-title">Hospital</span>
        </div>
        <div className="sidebar-user">
          <div className="sidebar-user-details">
            <div className="sidebar-user-avatar"></div>
            <span>Super Admin</span>
          </div>
        </div>
        <nav className="sidebar-nav">
          {menuItems.map((item, index) =>
            item.isHeader ? (
              <h2 key={index} className="sidebar-nav-header">
                {item.label}
              </h2>
            ) : (
              <Link key={index} href={item.href} passHref>
                <button
                  className={`sidebar-nav-item ${
                    pathname === item.href
                      ? 'sidebar-nav-item-active'
                      : ''
                  }`}>
                  {item.icon && <item.icon className="sidebar-nav-icon" />}
                  {item.label}
                </button>
              </Link>
            )
          )}
        </nav>
      </div>
    </>
  );
}
