import { Link } from "react-router-dom";
import { Package, Users, ShoppingCart, FolderOpen, TrendingUp, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock statistics - will be replaced with Supabase queries
const stats = [
  { title: "Total Products", value: 156, icon: Package, change: "+12 this month" },
  { title: "Total Orders", value: 89, icon: ShoppingCart, change: "+5 today" },
  { title: "Total Users", value: 234, icon: Users, change: "+18 this week" },
  { title: "Categories", value: 8, icon: FolderOpen, change: "2 new" },
];

const recentOrders = [
  { id: "ORD001", customer: "John Doe", amount: 2499, status: "Pending", date: "2024-01-15" },
  { id: "ORD002", customer: "Jane Smith", amount: 1298, status: "Completed", date: "2024-01-15" },
  { id: "ORD003", customer: "Bob Wilson", amount: 4999, status: "Processing", date: "2024-01-14" },
];

const AdminDashboard = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Admin</p>
        </div>
        <div className="flex gap-2">
          <Link to="/admin/products">
            <Button variant="outline">Manage Products</Button>
          </Link>
          <Link to="/admin/categories">
            <Button>Manage Categories</Button>
          </Link>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Link to="/admin/products/new">
              <Button variant="outline" className="w-full">Add Product</Button>
            </Link>
            <Link to="/admin/categories/new">
              <Button variant="outline" className="w-full">Add Category</Button>
            </Link>
            <Link to="/admin/orders">
              <Button variant="outline" className="w-full">View Orders</Button>
            </Link>
            <Link to="/admin/feedback">
              <Button variant="outline" className="w-full">View Feedback</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Recent Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              No recent feedback to display
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="font-medium">{order.id}</td>
                  <td>{order.customer}</td>
                  <td>₹{order.amount.toLocaleString("en-IN")}</td>
                  <td>
                    <span className={`badge-${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <Link to="/admin/orders">
              <Button variant="link" className="px-0">View all orders →</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
